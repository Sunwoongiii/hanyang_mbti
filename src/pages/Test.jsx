import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import useStore from '../store/useStore';
import { ChevronLeft } from 'lucide-react';

const Test = () => {
  const navigate = useNavigate();
  const { increaseScore, decreaseScore, resetScores } = useStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    resetScores();
  }, [resetScores]);

  const [shuffledQuestions] = useState(() => {
    return [...questions].sort(() => Math.random() - 0.5);
  });

  const currentQuestion = shuffledQuestions[currentIndex];

  const handleOptionClick = (type, score) => {
    setHistory([...history, { type, score }]);
    if (score > 0) increaseScore(type, score);

    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/result');
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      const lastChoice = history[history.length - 1];
      if (lastChoice.score > 0) decreaseScore(lastChoice.type, lastChoice.score);
      setHistory(history.slice(0, -1));
      setCurrentIndex(currentIndex - 1);
    }
  };

  const progressPercent = ((currentIndex + 1) / shuffledQuestions.length) * 100;

  // ✅ 핵심 변경: 텍스트 불투명도 향상 및 섀도우(Shadow) 추가
  const getOptionStyle = (index) => {
    // shadow-sm: 은은한 그림자, text-gray-600: 가독성 높은 불투명도
    const base = "w-full py-5 px-6 rounded-2xl transition-all duration-300 text-base font-bold mb-3 flex items-center justify-center text-center bg-white shadow-sm border border-gray-50 active:scale-95 text-gray-600 ";
    
    const hoverStyles = [
      // 0. 매우 그렇다
      "hover:bg-blue-600 hover:text-white hover:shadow-blue-200 hover:shadow-lg hover:border-blue-600",
      // 1. 그렇다
      "hover:bg-blue-400 hover:text-white hover:shadow-blue-100 hover:shadow-lg hover:border-blue-400",
      // 2. 보통이다
      "hover:bg-gray-400 hover:text-white hover:shadow-gray-200 hover:shadow-lg hover:border-gray-400",
      // 3. 그렇지 않다
      "hover:bg-slate-500 hover:text-white hover:shadow-slate-200 hover:shadow-lg hover:border-slate-500",
      // 4. 매우 그렇지 않다
      "hover:bg-slate-700 hover:text-white hover:shadow-slate-300 hover:shadow-lg hover:border-slate-700"
    ];

    return base + hoverStyles[index];
  };

  return (
    <div className="flex flex-col h-screen p-6 bg-slate-50/50 overflow-hidden font-sans">
      
      {/* 상단 헤더 */}
      <div className="flex items-center justify-between mt-4">
        <button 
          onClick={handlePrevClick}
          className={`p-2 rounded-full transition-colors ${currentIndex === 0 ? 'invisible' : 'text-gray-300 hover:bg-white hover:shadow-sm'}`}
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1 mx-6 bg-gray-200/50 rounded-full h-1.5 overflow-hidden">
          <div 
            className="bg-blue-600 h-1.5 rounded-full transition-all duration-700 ease-in-out shadow-[0_0_10px_rgba(37,99,235,0.3)]" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <div className="text-blue-600/50 font-black text-[10px] w-8 text-right tracking-tighter">
          {currentIndex + 1}
        </div>
      </div>

      {/* 질문 텍스트 (중앙) */}
      <div className="flex-1 flex items-center justify-center px-6">
        <h2 className="text-2xl font-black text-gray-800 text-center break-keep leading-tight tracking-tight">
          {currentQuestion.title}
        </h2>
      </div>

      {/* 선택지 영역 (섀도우 블록 스타일) */}
      <div className="flex flex-col gap-1 pb-16 px-2">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option.type, option.score)}
            className={getOptionStyle(index)}
          >
            <span>{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Test;
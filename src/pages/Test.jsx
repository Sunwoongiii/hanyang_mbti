import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import useStore from '../store/useStore';

const Test = () => {
  const navigate = useNavigate();
  const { increaseScore, decreaseScore, resetScores } = useStore();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState([]);
  
  // ✅ 임시 선택 상태를 저장하는 state 추가
  const [tempSelection, setTempSelection] = useState(null);

  useEffect(() => {
    resetScores();
  }, [resetScores]);

  const [shuffledQuestions] = useState(() => {
    return [...questions].sort(() => Math.random() - 0.5);
  });

  const currentQuestion = shuffledQuestions[currentIndex];

  // ✅ 1. 선택지 클릭 시 즉시 넘어가지 않고 상태만 저장
  const handleSelect = (index) => {
    setTempSelection(index);
  };

  // ✅ 2. '다음' 버튼 클릭 시 점수를 반영하고 넘어가는 로직
  const handleNextClick = () => {
    if (tempSelection === null) return;

    const selectedOption = currentQuestion.options[tempSelection];
    
    setHistory([...history, { type: selectedOption.type, score: selectedOption.score }]);
    if (selectedOption.score > 0) increaseScore(selectedOption.type, selectedOption.score);

    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTempSelection(null); // 다음 문항으로 넘어갈 때 선택 상태 초기화
    } else {
      navigate('/result');
    }
  };

  // ✅ 3. 이전 버튼 클릭 시 상태 롤백 및 선택 상태 초기화
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      const lastChoice = history[history.length - 1];
      if (lastChoice.score > 0) decreaseScore(lastChoice.type, lastChoice.score);
      
      setHistory(history.slice(0, -1));
      setCurrentIndex(currentIndex - 1);
      setTempSelection(null); // 이전으로 돌아가면 선택 상태도 초기화
    }
  };

  const progressPercent = ((currentIndex + 1) / shuffledQuestions.length) * 100;

  // ✅ 4. 선택 여부(tempSelection)에 따라 동적으로 스타일을 변경하도록 수정
  const getOptionStyle = (index) => {
    const isSelected = tempSelection === index;
    const base = "w-full py-5 px-6 rounded-2xl transition-all duration-300 text-base font-bold mb-3 flex items-center justify-center text-center border active:scale-95 ";
    
    if (isSelected) {
      // 선택된 상태의 스타일 (기존 hover 스타일을 가져와 고정시킴)
      const selectedStyles = [
        "bg-blue-600 text-white shadow-lg border-blue-600 shadow-blue-200", 
        "bg-blue-400 text-white shadow-lg border-blue-400 shadow-blue-100", 
        "bg-gray-400 text-white shadow-lg border-gray-400 shadow-gray-200", 
        "bg-slate-500 text-white shadow-lg border-slate-500 shadow-slate-200", 
        "bg-slate-700 text-white shadow-lg border-slate-700 shadow-slate-300"
      ];
      return base + selectedStyles[index];
    } else {
      // 미선택 상태의 기본 스타일
      return base + "bg-white text-gray-600 shadow-sm border-gray-100 hover:bg-gray-50";
    }
  };

  return (
    <div className="flex flex-col h-screen p-6 bg-slate-50/50 overflow-hidden font-sans">
      
      {/* 상단 헤더 (이전 버튼 제거, 진행바만 유지) */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex-1 mr-6 bg-gray-200/50 rounded-full h-1.5 overflow-hidden">
          <div 
            className="bg-blue-600 h-1.5 rounded-full transition-all duration-700 ease-in-out shadow-[0_0_10px_rgba(37,99,235,0.3)]" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <div className="text-blue-600/50 font-black text-[10px] w-8 text-right tracking-tighter">
          {currentIndex + 1} / {shuffledQuestions.length}
        </div>
      </div>

      {/* 질문 텍스트 (중앙) */}
      <div className="flex-1 flex items-center justify-center px-2 mt-4">
        <h2 className="text-2xl font-black text-gray-800 text-center break-keep leading-tight tracking-tight">
          {currentQuestion.title}
        </h2>
      </div>

      {/* 선택지 영역 */}
      <div className="flex flex-col gap-1 px-2">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={getOptionStyle(index)}
          >
            <span>{option.text}</span>
          </button>
        ))}
      </div>

      {/* ✅ 하단 내비게이션 바 (이전/다음 버튼) */}
      <div className="flex gap-3 pb-4 px-2 mt-8">
        {currentIndex > 0 && (
          <button 
            onClick={handlePrevClick}
            className="flex-1 py-4 bg-gray-200 text-gray-500 font-bold rounded-xl active:scale-95 transition-all"
          >
            이전
          </button>
        )}
        <button 
          onClick={handleNextClick}
          disabled={tempSelection === null}
          className={`flex-[2] py-4 rounded-xl font-black text-lg transition-all active:scale-95 ${
            tempSelection !== null 
              ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
              : "bg-gray-200 text-gray-400 cursor-default opacity-50"
          }`}
        >
          {currentIndex === shuffledQuestions.length - 1 ? '결과 보기' : '다음'}
        </button>
      </div>

    </div>
  );
};

export default Test;
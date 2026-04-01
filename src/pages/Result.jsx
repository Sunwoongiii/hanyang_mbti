import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import { calculateMBTI } from '../utils/calculate';
import { results } from '../data/results';

const Result = () => {
  const navigate = useNavigate();
  const { scores, resetScores } = useStore();

  const mbtiResult = calculateMBTI(scores);
  const resultData = results[mbtiResult] || results["DEFAULT"];
  const imageUrl = `/images/results/${mbtiResult}.png`;

  // ✅ MBTI 알파벳별 풀네임 매핑 딕셔너리
  const nameMap = {
    'C': 'Crew', 'S': 'Solo',
    'D': 'Dopamine', 'A': 'Academic',
    'M': 'Metal', 'G': 'Glass',
    'P': 'Plan', 'L': 'Last-Minute'
  };

  // ✅ 결과 코드(예: CDMP)를 풀네임 문자열(예: Crew, Dopamine, Metal, Plan)로 변환
  const fullNames = mbtiResult
    .split('')
    .map(char => nameMap[char])
    .join(', ');

  const handleRetry = () => {
    resetScores();
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center py-12 px-6 min-h-screen bg-slate-50">
      <p className="text-blue-600 font-black text-sm tracking-widest mb-2">@HYUTECH</p>
      
      <div className="w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 mb-10">
        
        <div className="w-full bg-white flex flex-col items-center p-7 pb-0">
          {/* MBTI 타입 대문자 강조 */}
          <h1 className="text-7xl font-extrabold text-blue-600 mb-2 tracking-tighter drop-shadow-sm">
            {mbtiResult}
          </h1>

          {/* ✅ 새로 추가된 부분: 타입별 풀네임 설명 */}
          <p className="text-gray-400 font-bold text-sm mb-6">
            ({fullNames})
          </p>

          <div className="w-full bg-white flex justify-center">
            <img 
              src={imageUrl} 
              alt={mbtiResult}
              // className="w-full max-w-[240px] h-auto drop-shadow-lg object-contain transform hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.target.src = '/images/results/default.png'; }} 
            />
          </div>
        </div>

        <div className="p-8 pt-7">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-4 break-keep leading-tight">
            "{resultData.title}"
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-2">
            {resultData.tags.map((tag, index) => (
              <span key={index} className="text-blue-500 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="w-full bg-gray-100 mb-4"></div>

          <p className="text-gray-700 leading-relaxed text-[0.95rem] text-center break-keep font-medium  p-5 bg-slate-50 rounded-2xl border border-slate-100">
            {resultData.description}
          </p>
          <div className="mt-6 mb-2 flex flex-col items-center animate-bounce-slow">
            <p className="text-[0.85rem] font-black text-gray-800 mb-1">
              📸지금 이 화면을 캡처해서
            </p>
            <p className="text-[0.85rem] font-extrabold text-gray-800">
              <span className="text-blue-600">@hyu_tech</span> 태그하고 스토리에 올려보세요!
            </p>
          </div>
        </div>
      </div>

      <div className="w-full space-y-4">
        <button 
          onClick={handleRetry}
          className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl text-lg hover:bg-blue-700 transition-all shadow-xl active:scale-[0.98] transform"
        >
          테스트 다시하기
        </button>
        
        <p className="text-center text-gray-400 text-[0.7rem] font-bold tracking-tighter">
          한양대학교 제49대 공과대학 학생회 비상대책위원회
        </p>
      </div>
    </div>
  );
};

export default Result;

//마지막 화면 캡쳐시 다 보이게, 설명 가운데 정렬, 공백 줄이기
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 훅입니다.

  return (
    /* flex-col: 수직 배치, justify-center: 상하 중앙, h-full: 컨테이너 꽉 채우기 */
    <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-white font-sans">
      
      {/* 1. 상단 학생회 명칭 */}
      <h2 className="text-sm font-bold text-gray-400 mb-5 tracking-tight">
        한양대학교 제49대 공과대학 학생회 비상대책위원회
      </h2>
      
      {/* 2. 메인 타이틀 */}
      <h1 className="text-5xl font-thick-aggro text-blue-600  break-keep leading-tight tracking-tighter">
        공대 시험기간
      </h1>
      <h1 className="text-6xl font-thick-aggro text-blue-600 mb-5 break-keep leading-tight tracking-tighter">
        MBTI 유형
      </h1>

      {/* ✅ 3. 핵심 변경: 공과대학 마스코트 이미지 배치 */}
      <div className="w-full flex justify-center mb-10 px-8">
        <img 
          src="/images/mascot.png" // 마스코트 이미지 경로 (public/images/ 폴더 안에 넣어주세요)
          alt="공과대학 마스코트"
          className="w-full max-w-[300px] h-auto  object-contain transform hover:scale-105 transition-transform duration-500" // 세련된 효과 추가
        />
      </div>
      
      {/* 4. 부연 설명 문구 */}
      <p className="text-gray-500 mb-3 break-keep italic text-sm leading-relaxed font-medium">
        나의 시험기간 MBTI 유형은?
      </p>

      {/* 5. 테스트 시작 버튼 */}
      <button 
        onClick={() => navigate('/test')}
        className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl text-xl hover:bg-blue-700 transition-all shadow-xl active:scale-95 transform"
      >
        테스트 시작하기
      </button>
      
      {/* 하단 저작권 표시 (선택사항) */}
      <p className="mt-8 text-gray-300 text-[0.65rem] tracking-tighter">
        © 2026 한양대학교 공과대학 학생회. All rights reserved. <br />made by Choi Sunwoong
      </p>
    </div>
  );
};

export default Home;
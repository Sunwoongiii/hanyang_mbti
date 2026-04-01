import { results } from '../data/results';

const Debug = () => {
  // 16가지 모든 MBTI 조합 생성
  const combinations = [
    'CDMP', 'CDML', 'CDGP', 'CDGL',
    'CAMP', 'CAML', 'CAGP', 'CAGL',
    'SDMP', 'SDML', 'SDGP', 'SDGL',
    'SAMP', 'SAML', 'SAGP', 'SAGL'
  ];

  const nameMap = {
    'C': 'Crew', 'S': 'Solo',
    'D': 'Dopamine', 'A': 'Academic',
    'M': 'Metal', 'G': 'Glass',
    'P': 'Plan', 'L': 'Last-Minute'
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-black mb-8 text-center text-blue-600">16가지 결과 전체 검수 모드</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {combinations.map((mbti) => {
          const data = results[mbti] || results["DEFAULT"];
          const fullNames = mbti.split('').map(char => nameMap[char]).join(', ');
          
          return (
            <div key={mbti} className="bg-white rounded-[2rem] shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6 text-center">
                <h2 className="text-4xl font-black text-blue-600 mb-1">{mbti}</h2>
                <p className="text-gray-400 text-xs font-bold mb-4">({fullNames})</p>
                
                <div className="flex justify-center mb-4">
                  <img 
                    src={`/images/results/${mbti}.png`} 
                    alt={mbti}
                    className="w-40 h-40 object-contain"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=No+Image'; }}
                  />
                </div>
                
                <h3 className="font-bold text-lg mb-2 break-keep">"{data.title}"</h3>
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {data.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 text-left line-clamp-3 bg-gray-50 p-3 rounded-xl italic">
                  {data.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Debug;
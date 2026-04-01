import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';
import Debug from './pages/debug';

function App() {
  return (
    // 모바일 환경에 맞게 최대 너비를 제한하고 가운데 정렬하는 기본 레이아웃입니다.
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md bg-white shadow-md min-h-screen relative">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/result" element={<Result />} />
            <Route path="/debug" element={<Debug />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
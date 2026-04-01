import { create } from 'zustand';

const useStore = create((set) => ({
  scores: {
    C: 0, S: 0, D: 0, A: 0, M: 0, G: 0, P: 0, L: 0, 
  },
  
  increaseScore: (type, amount) => set((state) => ({
    scores: { ...state.scores, [type]: state.scores[type] + amount }
  })),

  // ✅ 새로 추가: 이전 버튼을 위한 점수 차감 함수
  decreaseScore: (type, amount) => set((state) => ({
    scores: { ...state.scores, [type]: Math.max(0, state.scores[type] - amount) }
  })),

  resetScores: () => set({
    scores: { C: 0, S: 0, D: 0, A: 0, M: 0, G: 0, P: 0, L: 0 }
  }),
}));

export default useStore;
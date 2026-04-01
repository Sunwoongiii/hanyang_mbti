// 선택지를 자동으로 만들어주는 함수
const generateOptions = (positiveTrait, negativeTrait) => [
  { text: "매우 그렇다", type: positiveTrait, score: 2 },
  { text: "그렇다", type: positiveTrait, score: 1 },
  { text: "보통이다", type: positiveTrait, score: 0 },
  { text: "그렇지 않다", type: negativeTrait, score: 1 },
  { text: "매우 그렇지 않다", type: negativeTrait, score: 2 },
];

export const questions = [
  // 🔹 [C vs S] (같이 vs 혼자)
  {
    id: 1,
    title: "시험기간에는 혼자보다 같이 공부해야 더 잘 된다.",
    options: generateOptions("C", "S"),
  },
  {
    id: 2,
    title: "과방이나 카페에서 사람들과 같이 있어야 집중이 된다.",
    options: generateOptions("C", "S"),
  },
  {
    id: 3,
    title: "혼자 공부하는 게 훨씬 편하고 효율적이다.",
    options: generateOptions("S", "C"),
  },

  // 🔹 [D vs A] (도파민 vs 학구)
  {
    id: 4,
    title: "시험기간에도 술, 릴스, 노는 것은 못 참는다.",
    options: generateOptions("D", "A"),
  },
  {
    id: 5,
    title: "공부하다가도 딴짓(유튜브, SNS)을 자주 한다.",
    options: generateOptions("D", "A"),
  },
  {
    id: 6,
    title: "시험기간에는 거의 공부에만 집중하는 편이다.",
    options: generateOptions("A", "D"),
  },

  // 🔹 [M vs G] (강철 vs 유리 멘탈)
  {
    id: 7,
    title: "시험이 다가와도 크게 불안하지 않은 편이다.",
    options: generateOptions("M", "G"),
  },
  {
    id: 8,
    title: "시험 생각만 하면 스트레스 받고 걱정이 많아진다.",
    options: generateOptions("G", "M"),
  },
  {
    id: 9,
    title: "시험 직전에도 멘탈이 크게 흔들리지 않는다.",
    options: generateOptions("M", "G"),
  },

  // 🔹 [P vs L] (계획 vs 벼락)
  {
    id: 10,
    title: "시험기간 전에 미리 계획을 세워서 공부하는 편이다.",
    options: generateOptions("P", "L"),
  },
  {
    id: 11,
    title: "보통 시험 직전에 몰아서 공부하게 된다.",
    options: generateOptions("L", "P"),
  },
  {
    id: 12,
    title: "하루 공부량이나 일정을 미리 정해두는 편이다.",
    options: generateOptions("P", "L"),
  }
]; // 여기서 세미콜론과 대괄호가 정확히 닫혀야 합니다.
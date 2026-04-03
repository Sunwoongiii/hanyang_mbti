// // 선택지를 자동으로 만들어주는 함수
// const generateOptions = (positiveTrait, negativeTrait) => [
//   { text: "매우 그렇다", type: positiveTrait, score: 2 },
//   { text: "그렇다", type: positiveTrait, score: 1 },
//   { text: "보통이다", type: positiveTrait, score: 0 },
//   { text: "그렇지 않다", type: negativeTrait, score: 1 },
//   { text: "매우 그렇지 않다", type: negativeTrait, score: 2 },
// ];

// export const questions = [
//   // 🔹 [C vs S] (같이 vs 혼자)
//   {
//     id: 1,
//     // title: "시험기간에는 혼자보다 같이 공부해야 더 잘 된다",
//     title: "막",
//     options: generateOptions("C", "S"),
//   },
//   {
//     id: 2,
//     title: "과방이나 카페에서 사람들과 같이 있어야 집중이 된다",
//     options: generateOptions("C", "S"),
//   },
//   {
//     id: 3,
//     // title: "혼자 공부하는 게 훨씬 편하고 효율적이다",
//     title: "동기들에게 서로의 공부 진행 상황을 공유하면 마음이 편해진다",
//     options: generateOptions("C", "S"),
//   },

//   // 🔹 [D vs A] (도파민 vs 학구)
//   {
//     id: 4,
//     title: "시험기간에도 술, 릴스, 노는 것은 못 참는다",
//     options: generateOptions("D", "A"),
//   },
//   {
//     id: 5,
//     // title: "공부하다가도 딴짓(유튜브, SNS)을 자주 한다",
//     title: "공부할 때는 핸드폰을 무음으로 하고 화면을 뒤집어 놓는다",
//     options: generateOptions("A", "D"),
//   },
//   {
//     id: 6,
//     // title: "시험기간에는 거의 공부에만 집중하는 편이다",
//     title: "신나는 노래나 영상을 옆에 틀어두면서 공부한다",
//     options: generateOptions("D", "A"),
//   },

//   // 🔹 [M vs G] (강철 vs 유리 멘탈)
//   {
//     id: 7,
//     // title: "시험이 다가와도 크게 불안하지 않은 편이다",
//     title: "공부를 많이 한 동기를 보면 조급해진다",
//     options: generateOptions("G", "M"),
//   },
//   {
//     id: 8,
//     // title: "시험 생각만 하면 스트레스를 받고 걱정이 많아진다",
//     title: "시험 전날, 보지 못한 범위가 많으면 오히려 집중이 되지 않는다",
//     options: generateOptions("G", "M"),
//   },
//   {
//     id: 9,
//     // title: "시험 직전에도 멘탈이 크게 흔들리지 않는다",
//     title: "첫 전공 시험을 시원하게 말아먹으면 며칠간 괴롭다",
//     options: generateOptions("G", "M"),
//   },

//   // 🔹 [P vs L] (계획 vs 벼락)
//   {
//     id: 10,
//     // title: "시험기간 전에 미리 계획을 세워서 공부하는 편이다",
//     title: "무슨 요일에 어떤 과목을 어디까지 공부할지 계획하는 편이다",
//     options: generateOptions("P", "L"),
//   },
//   {
//     id: 11,
//     // title: "보통 시험 직전에 몰아서 공부하게 된다",
//     title: "'진짜 안하면 F다' 싶을 때야 공부를 시작한다",
//     options: generateOptions("L", "P"),
//   },
//   {
//     id: 12,
//     // title: "하루 공부량이나 일정을 미리 정해두는 편이다",
//     title: "공부 계획이 밀리면 스트레스를 받고 잠을 줄여서라도 할당량을 채운다",
//     options: generateOptions("P", "L"),
//   }
// ]; // 여기서 세미콜론과 대괄호가 정확히 닫혀야 합니다.

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
    title: "막히는 전공 문제는 혼자 끙끙대기보다 단톡방에 SOS부터 친다",
    options: generateOptions("C", "S"),
  },
  {
    id: 2,
    title: "조용한 도서관보다 사람 온기가 있는 과방이나 카페가 더 집중된다",
    options: generateOptions("C", "S"),
  },
  {
    id: 3,
    title: "동기들과 \"나 아직 1단원임ㅋㅋ\" 하며 진도를 공유해야 마음이 편하다",
    options: generateOptions("C", "S"),
  },

  // 🔹 [D vs A] (도파민 vs 학구)
  {
    id: 4,
    title: "\"딱 하나만 봐야지\" 하다가 쇼츠나 릴스에 빠져 시간을 순삭당한다",
    options: generateOptions("D", "A"),
  },
  {
    id: 5,
    title: "공부를 시작할 때는 폰을 무음으로 돌리고 시야에서 아예 치워버린다",
    options: generateOptions("A", "D"),
  },
  {
    id: 6,
    title: "적막한 건 못 참는다. 신나는 노동요나 영상을 틀어둬야 책이 눈에 들어온다",
    options: generateOptions("D", "A"),
  },

  // 🔹 [M vs G] (강철 vs 유리 멘탈)
  {
    id: 7,
    title: "\"나 벌써 3회독 함\" 같은 동기들 말을 들으면 멘탈이 바사삭 흔들린다",
    options: generateOptions("G", "M"),
  },
  {
    id: 8,
    title: "시험 전날, 못 본 범위가 많으면 불안감에 뇌정지가 와서 글씨가 안 읽힌다",
    options: generateOptions("G", "M"),
  },
  {
    id: 9,
    title: "첫 전공 시험을 시원하게 말아먹으면, 며칠 동안 계속 생각나서 괴롭다",
    options: generateOptions("G", "M"),
  },

  // 🔹 [P vs L] (계획 vs 벼락)
  {
    id: 10,
    title: "시험 2~3주 전부터 어떤 과목을 어디까지 볼지 미리 생각해둔다",
    options: generateOptions("P", "L"),
  },
  {
    id: 11,
    title: "\"진짜 안 하면 F다\" 싶을 정도로 발등에 불이 떨어져야 미친 효율이 나온다",
    options: generateOptions("L", "P"),
  },
  {
    id: 12,
    title: "공부 계획이 하루라도 밀리면, 잠을 줄여서라도 어떻게든 할당량을 채운다",
    options: generateOptions("P", "L"),
  }
];
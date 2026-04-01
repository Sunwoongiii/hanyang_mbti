export const calculateMBTI = (scores) => {
  let result = "";

  // 점수가 같을 경우(>=) 앞의 성향을 기본값으로 줍니다.
  result += scores.C >= scores.S ? "C" : "S";
  result += scores.D >= scores.A ? "D" : "A";
  result += scores.M >= scores.G ? "M" : "G";
  result += scores.P >= scores.L ? "P" : "L";

  return result; // "CDMP", "SAML" 같은 4자리 문자열 반환
};
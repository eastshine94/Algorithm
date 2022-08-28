const typeScore = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
const typePairs = [
  ["R", "T"],
  ["C", "F"],
  ["J", "M"],
  ["A", "N"],
];
function solution(survey, choices) {
  let answer = "";

  choices.forEach((choice, idx) => {
    const key = choice < 4 ? survey[idx][0] : survey[idx][1];
    typeScore[key] += Math.abs(4 - choice);
  });
  typePairs.forEach(([type1, type2]) => {
    if (typeScore[type1] === typeScore[type2]) {
      answer += type1.localeCompare(type2) ? type1 : type2;
    } else {
      answer += typeScore[type1] > typeScore[type2] ? type1 : type2;
    }
  });
  return answer;
}

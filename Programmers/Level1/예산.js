function solution(d, budget) {
  d.sort((a, b) => a - b);
  let answer = 0;
  for (let val of d) {
    if (val <= budget) {
      answer++;
      budget -= val;
    } else {
      break;
    }
  }
  return answer;
}

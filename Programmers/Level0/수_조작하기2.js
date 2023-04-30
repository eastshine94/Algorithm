function solution(numLog) {
  let start = numLog[0];
  let answer = "";
  for (let i = 1; i < numLog.length; i++) {
    const cal = numLog[i] - start;
    if (cal === 1) {
      answer += "w";
    } else if (cal === -1) {
      answer += "s";
    } else if (cal === 10) {
      answer += "d";
    } else {
      answer += "a";
    }
    start = numLog[i];
  }
  return answer;
}

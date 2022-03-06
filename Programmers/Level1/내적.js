function solution(a, b) {
  let answer = 0;
  a.forEach((val, idx) => {
    answer += val * b[idx];
  });
  return answer;
}

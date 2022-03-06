function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((val, idx) => {
    answer += signs[idx] ? val : -val;
  });
  return answer;
}

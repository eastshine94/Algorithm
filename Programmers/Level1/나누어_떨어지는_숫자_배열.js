function solution(arr, divisor) {
  let answer = [];
  arr.forEach(val => {
    if (val % divisor === 0) {
      answer.push(val);
    }
  });
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

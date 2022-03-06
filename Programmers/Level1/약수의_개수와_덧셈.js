function getIsPositive(num) {
  if (num === 1) return false;
  let answer = 2;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      answer++;
    }
  }
  return answer % 2 === 0 ? true : false;
}

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    answer += getIsPositive(i) ? i : -i;
  }
  return answer;
}

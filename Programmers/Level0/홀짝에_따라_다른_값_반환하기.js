function solution(n) {
  let answer = 0;
  const isOdd = n % 2 === 1;
  for (let i = 1; i <= n; i++) {
    if (isOdd && i % 2 === 1) {
      answer += i;
    } else if (!isOdd && i % 2 === 0) {
      answer += i ** 2;
    }
  }
  return answer;
}

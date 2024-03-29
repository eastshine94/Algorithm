function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i < Math.floor(Math.sqrt(n)) + 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      answer++;
    }
  }
  return answer;
}

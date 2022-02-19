function getIsPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  return n
    .toString(k)
    .split('0')
    .filter(val => (!!val ? getIsPrime(Number(val)) : false)).length;
}

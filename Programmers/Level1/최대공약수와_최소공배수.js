// a>=b
function getGcd(a, b) {
  return a % b === 0 ? b : getGcd(b, a % b);
}

function solution(n, m) {
  const gcd = getGcd(Math.max(n, m), Math.min(n, m));
  const lcm = (n * m) / gcd;
  return [gcd, lcm];
}

function solution(x, n) {
  return Array.from(Array(n).keys(), val => x * (1 + val));
}

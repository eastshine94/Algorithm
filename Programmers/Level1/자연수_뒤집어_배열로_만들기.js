function solution(n) {
  return [...String(n)].reverse().map(val => parseInt(val));
}

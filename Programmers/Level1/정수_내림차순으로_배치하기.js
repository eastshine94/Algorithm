function solution(n) {
  return Number([...String(n)].sort((a, b) => b.localeCompare(a)).join(''));
}

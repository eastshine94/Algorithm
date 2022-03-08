function solution(n) {
  const word = '수박';
  return `${word.repeat(n / 2)}${n % 2 === 0 ? '' : '수'}`;
}

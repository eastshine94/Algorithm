function solution(array) {
  const mid = Math.floor(array.length / 2);
  return array.sort((a, b) => a - b)[mid];
}

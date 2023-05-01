function solution(start, end) {
  return Array.from(new Array(end - start + 1), (val, idx) => idx + start);
}

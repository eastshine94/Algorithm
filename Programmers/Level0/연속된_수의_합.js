function solution(num, total) {
  const f = (2 * total - num ** 2 + num) / (2 * num);
  return Array.from(new Array(num), (_, idx) => f + idx);
}

function solution(dot) {
  const [x, y] = dot;
  return x * y > 0 ? (x > 0 ? 1 : 3) : x < 0 ? 2 : 4;
}

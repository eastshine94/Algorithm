function solution(ineq, eq, n, m) {
  const operator = ineq + eq;
  const result =
    operator === "<="
      ? n <= m
      : operator === ">="
      ? n >= m
      : operator === "<!"
      ? n < m
      : n > m;
  return result ? 1 : 0;
}

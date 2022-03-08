function solution(n) {
  return [...String(n)].reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);
}

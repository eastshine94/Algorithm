function solution(n, k) {
  const drinkNum = k - Math.floor(n / 10);
  return n * 12000 + drinkNum * 2000;
}

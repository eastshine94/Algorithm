function solution(price, money, count) {
  const cal = money - price * ((count * (count + 1)) / 2);

  return cal <= 0 ? Math.abs(cal) : 0;
}

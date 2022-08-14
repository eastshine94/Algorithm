function solution(n) {
  if (n % 2 === 1) return 0;
  const arr = [1, 3];
  const lastIdx = Math.floor(n / 2);
  for (let i = 2; i <= lastIdx; i++) {
    let sum = 0;
    for (j = i - 2; j >= 0; j--) {
      sum += arr[j] * 2;
    }
    arr[i] = (3 * arr[i - 1] + sum) % 1000000007;
  }
  return arr[lastIdx];
}

function getResult(list) {
  const len = list.length;
  const dp = new Array(len).fill(0);
  dp[0] = list[0];
  dp[1] = list[1];
  dp[2] = dp[0] + list[2];

  let max = Math.max(dp[1], dp[2]);
  for (let i = 3; i < len; i++) {
    dp[i] = list[i] + Math.max(dp[i - 2], dp[i - 3]);
    max = Math.max(dp[i], max);
  }
  return max;
}

function solution(sticker) {
  if (sticker.length <= 3) {
    return Math.max(...sticker);
  }

  const listWithFirst = sticker.slice(0, sticker.length - 1);
  const listWithLast = sticker.slice(1);

  return Math.max(getResult(listWithFirst), getResult(listWithLast));
}

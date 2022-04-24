function check(a, b, g, s, w, t, currT) {
  let maxG = 0;
  let maxS = 0;
  let maxA = 0;

  for (let i = 0; i < g.length; i++) {
    let carryCnt =
      Math.floor(currT / (t[i] * 2)) +
      (Math.floor(currT / t[i]) % 2 === 1 ? 1 : 0);

    const carryG = w[i] * carryCnt > g[i] ? g[i] : w[i] * carryCnt;
    const carryS = w[i] * carryCnt > s[i] ? s[i] : w[i] * carryCnt;

    maxG += carryG;
    maxS += carryS;
    maxA += w[i] * carryCnt > g[i] + s[i] ? g[i] + s[i] : w[i] * carryCnt;
  }

  return a <= maxG && b <= maxS && a + b <= maxA;
}

function solution(a, b, g, s, w, t) {
  let answer = 10 ** 9 * 4 * 10 ** 5;
  let minT = 0;
  let maxT = answer;
  let currT = Math.floor((maxT + minT) / 2);
  while (minT < maxT) {
    if (check(a, b, g, s, w, t, currT)) {
      maxT = currT;
      answer = currT;
    } else {
      minT = currT + 1;
    }
    currT = Math.floor((maxT + minT) / 2);
  }

  return answer;
}

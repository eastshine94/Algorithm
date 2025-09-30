function solution(k, ranges) {
  var answer = [];
  const pos = { 0: k };
  let idx = 0;
  while (true) {
    const y = pos[idx];
    idx++;
    if (y % 2 === 0) {
      pos[idx] = y / 2;
    } else {
      pos[idx] = y * 3 + 1;
    }
    if (pos[idx] <= 1) {
      break;
    }
  }

  for (let v of ranges) {
    const [x1, b] = v;
    const x2 = idx + b;
    if (x2 < 0 || x1 > x2) {
      answer.push(-1);
    } else if (x1 === x2) {
      answer.push(0);
    } else {
      let sum = 0;
      for (let i = x1; i < x2; i++) {
        sum += (pos[i] + pos[i + 1]) / 2;
      }
      answer.push(sum);
    }
  }

  return answer;
}

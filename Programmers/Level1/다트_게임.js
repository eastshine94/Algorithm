function solution(dartResult) {
  const scores = dartResult
    .replace(/[^0-9]+/g, ' ')
    .trim()
    .split(' ')
    .map(val => Number(val));

  const bouns = dartResult
    .replace(/[0-9]+/g, ' ')
    .trim()
    .split(' ');

  bouns.forEach((val, idx) => {
    if (val.indexOf('D') >= 0) {
      scores[idx] **= 2;
    } else if (val.indexOf('T') >= 0) {
      scores[idx] **= 3;
    }
    if (val.indexOf('*') >= 0) {
      scores[idx] *= 2;
      if (idx > 0) {
        scores[idx - 1] *= 2;
      }
    } else if (val.indexOf('#') >= 0) {
      scores[idx] *= -1;
    }
  });
  return scores.reduce((acc, curr) => acc + curr, 0);
}

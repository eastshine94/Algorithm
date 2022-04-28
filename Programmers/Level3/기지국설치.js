function solution(n, stations, w) {
  let answer = 0;
  let curr = 1;
  stations.forEach(s => {
    if (curr < s - w) {
      const area = s - w - curr;
      answer += Math.ceil(area / (2 * w + 1));
    }
    curr = s + w + 1;
  });
  const area = n - curr + 1;
  answer += Math.ceil(area / (2 * w + 1));

  return answer;
}

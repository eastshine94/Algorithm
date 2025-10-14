function solution(sequence, k) {
  const n = sequence.length;
  let answer = [0, n];
  let sum = 0;
  let s = 0;
  for (let i = 0; i < n; i++) {
    const v = sequence[i];
    const range = answer[1] - answer[0];
    if (v > k) {
      return answer;
    }
    if (v === k) {
      return [i, i];
    }

    sum += v;
    if (sum > k) {
      while (sum > k) {
        sum -= sequence[s];
        s++;
      }
    }
    const currRange = i - s;
    if (sum === k) {
      if (range > currRange) {
        answer = [s, i];
      }
      sum -= sequence[s];
      s++;
      continue;
    }
    if (currRange === range) {
      sum -= sequence[s];
      s++;
    }
  }

  return answer;
}

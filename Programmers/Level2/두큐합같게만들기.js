function solution(queue1, queue2) {
  let answer = 0;
  const queue = [...queue1, ...queue2];

  const n = queue.length;

  let sum1 = queue1.reduce((acc, curr) => acc + curr, 0);
  let sum2 = queue2.reduce((acc, curr) => acc + curr, 0);

  const sum = sum1 + sum2;
  if (sum % 2 === 1) {
    return -1;
  }
  const target = sum / 2;

  let s = 0;
  let e = queue1.length;

  while (s <= e && e < n) {
    if (sum1 === target) {
      return answer;
    }

    if (sum1 > target) {
      sum1 -= queue[s];
      s++;
    } else if (sum1 < target) {
      sum1 += queue[e];
      e++;
    }
    answer++;
  }

  return -1;
}

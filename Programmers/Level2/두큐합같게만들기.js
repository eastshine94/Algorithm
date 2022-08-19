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

  const bfs = [[0, queue1.length, sum1]];
  const map = {};
  while (bfs.length > 0) {
    const len = bfs.length;

    for (let i = 0; i < len; i++) {
      const [j, k, sum] = bfs.shift();

      if (sum === target) {
        return answer;
      }
      const key1 = `${j + 1},${k}`;
      const key2 = `${j},${k + 1}`;
      if (sum > target && j + 1 < k && !map[key1]) {
        bfs.push([j + 1, k, sum - queue[j]]);
        map[key1] = true;
      }

      if (sum < target && k + 1 < n && !map[key2]) {
        bfs.push([j, k + 1, sum + queue[k]]);
        map[key2] = true;
      }
    }
    answer++;
  }

  return -1;
}

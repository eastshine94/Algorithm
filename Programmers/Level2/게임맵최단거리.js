function solution(maps) {
  let answer = 0;
  const n = maps.length;
  const m = maps[0].length;
  const xAxis = [0, 0, 1, -1];
  const yAxis = [1, -1, 0, 0];
  const visited = Array.from(new Array(n), () => new Array(m).fill(false));

  const queue = [[0, 0]];
  while (queue.length > 0) {
    answer++;
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const [y, x] = queue.shift();
      for (let j = 0; j < 4; j++) {
        const nextX = x + xAxis[j];
        const nextY = y + yAxis[j];
        if (
          nextX >= 0 &&
          nextX < m &&
          nextY >= 0 &&
          nextY < n &&
          maps[nextY][nextX] === 1 &&
          !visited[nextY][nextX]
        ) {
          if (nextX === m - 1 && nextY === n - 1) {
            return answer + 1;
          }
          visited[nextY][nextX] = true;
          queue.push([nextY, nextX]);
        }
      }
    }
  }

  return -1;
}

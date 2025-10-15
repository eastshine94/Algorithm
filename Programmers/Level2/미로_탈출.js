function solution(maps) {
  let queue = [];
  let lToS = -1;
  let lToE = -1;

  const n = maps.length;
  const m = maps[0].length;
  const xAxis = [0, 0, 1, -1];
  const yAxis = [1, -1, 0, 0];
  const visited = Array.from(new Array(n), () => new Array(m).fill(false));

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      const v = maps[i][j];
      if (v === "L") {
        queue.push({ idx: [i, j], sum: 0 });
        visited[i][j] = true;
      } else if (v === "X") {
        visited[i][j] = true;
      }
    }
  }

  while (queue.length > 0) {
    const { idx, sum } = queue.shift();
    const [y, x] = idx;

    for (let i = 0; i < 4; i++) {
      const nextX = x + xAxis[i];
      const nextY = y + yAxis[i];
      if (
        nextX >= 0 &&
        nextX < m &&
        nextY >= 0 &&
        nextY < n &&
        !visited[nextY][nextX]
      ) {
        const v = maps[nextY][nextX];
        visited[nextY][nextX] = true;
        if (v !== "X") {
          queue.push({ idx: [nextY, nextX], sum: sum + 1 });
          if (v === "S") {
            lToS = sum + 1;
          }
          if (v === "E") {
            lToE = sum + 1;
          }
        }
      }
    }

    if (lToS >= 0 && lToE >= 0) {
      break;
    }
  }

  return lToS < 0 || lToE < 0 ? -1 : lToS + lToE;
}

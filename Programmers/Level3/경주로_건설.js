function solution(board) {
  let answer = Number.MAX_SAFE_INTEGER;
  const len = board.length;
  const costArr = Array.from(new Array(len), () =>
    new Array(len).fill(Number.MAX_SAFE_INTEGER)
  );

  const xPos = [1, 0, -1, 0];
  const yPos = [0, 1, 0, -1];

  const dfs = (pos, direction, totalCost) => {
    const [currY, currX] = pos;
    if (currY === len - 1 && currX === len - 1) {
      answer = Math.min(answer, totalCost);
      return;
    }

    for (let i = 0; i < 4; i++) {
      const y = currY + yPos[i];
      const x = currX + xPos[i];
      if (y < 0 || y >= len || x < 0 || x >= len) {
        continue;
      }

      if (board[y][x] === 0) {
        const moved = i === 0 || i === 2 ? 'x' : 'y';
        const cost = direction === null || moved === direction ? 100 : 600;

        // 해당 지점에 도달했을 때 비용이 이전보다 높다면 건너뜀
        if (costArr[y][x] < totalCost + cost) {
          continue;
        }

        // 건설 비용이 이전에 찾은 최소값보다 크다면 탐색 중지
        if (totalCost + cost >= answer) {
          return;
        }
        costArr[y][x] = totalCost + cost;
        board[y][x] = 1;
        dfs([y, x], moved, totalCost + cost);
        board[y][x] = 0;
      }
    }
  };

  dfs([0, 0], null, 0);
  return answer;
}

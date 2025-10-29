const xpos = [1, -1, 0, 0];
const ypos = [0, 0, 1, -1];

function getBlockList(arr, target) {
  const result = [];
  const visited = Array.from({ length: arr.length }, () =>
    Array.from({ length: arr[0].length }, () => false)
  );

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === target && !visited[i][j]) {
        visited[i][j] = true;
        const queue = [[i, j]];
        const positions = [[i, j]];
        let minX = j;
        let maxX = j;
        let minY = i;
        let maxY = i;

        while (queue.length > 0) {
          const [y, x] = queue.shift();
          for (let k = 0; k < 4; k++) {
            const nY = y + ypos[k];
            const nX = x + xpos[k];
            if (
              nY >= 0 &&
              nY < arr.length &&
              nX >= 0 &&
              nX < arr[0].length &&
              arr[nY][nX] === target &&
              !visited[nY][nX]
            ) {
              visited[nY][nX] = true;
              queue.push([nY, nX]);
              positions.push([nY, nX]);

              minX = Math.min(minX, nX);
              maxX = Math.max(maxX, nX);
              minY = Math.min(minY, nY);
              maxY = Math.max(maxY, nY);
            }
          }
        }
        const block = Array.from({ length: maxY - minY + 1 }, () =>
          Array.from({ length: maxX - minX + 1 }, () => 0)
        );

        positions.forEach(([y, x]) => {
          block[y - minY][x - minX] = 1;
        });

        result.push({ ele: block, count: positions.length });
      }
    }
  }

  return result;
}

function rotate(list) {
  const n = list.length;
  const m = list[0].length;

  const rotated = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  );
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      rotated[j][n - i - 1] = list[i][j];
    }
  }
  return rotated;
}

function is2DArrayEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i].length !== b[i].length) return false;
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] !== b[i][j]) return false;
    }
  }

  return true;
}

function solution(game_board, table) {
  let answer = 0;

  const blanks = getBlockList(game_board, 0);
  const blocks = getBlockList(table, 1);

  const checked = Array.from({ length: blanks.length }, () => false);

  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < blanks.length; j++) {
      if (checked[j]) {
        continue;
      }

      let block = blocks[i].ele;
      const blank = blanks[j].ele;
      for (let k = 0; k < 4; k++) {
        block = rotate(block);
        if (is2DArrayEqual(block, blank)) {
          answer += blocks[i].count;
          checked[j] = true;

          break;
        }
      }

      if (checked[j]) {
        break;
      }
    }
  }

  return answer;
}

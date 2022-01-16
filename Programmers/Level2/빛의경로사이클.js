function solution(grid) {
  const answer = [];
  const lightPaths = [];
  grid = grid.map(val => {
    /**
     * 0:빛이 위에서 아래로 옴
     * 1: 아래 => 위
     * 2: 좌 => 우
     * 3: 우 => 좌
     * */
    lightPaths.push(
      new Array(val.length).fill(null).map(() => new Array(4).fill(false))
    );
    return val.split('');
  });

  grid.forEach((list, i) => {
    list.forEach((value, j) => {
      for (let k = 0; k < 4; k++) {
        let count = 0;
        let y = i;
        let x = j;
        let currDir = k;
        while (true) {
          if (lightPaths[y][x][currDir]) {
            if (count > 0) {
              answer.push(count);
            }
            break;
          }

          lightPaths[y][x][currDir] = true;
          const direction = grid[y][x];
          count += 1;
          if (
            (direction === 'S' && currDir === 0) ||
            (direction === 'L' && currDir === 3) ||
            (direction === 'R' && currDir === 2)
          ) {
            y = y + 1 < grid.length ? y + 1 : 0;
            currDir = 0;
          } else if (
            (direction === 'S' && currDir === 1) ||
            (direction === 'L' && currDir === 2) ||
            (direction === 'R' && currDir === 3)
          ) {
            y = y - 1 >= 0 ? y - 1 : grid.length - 1;
            currDir = 1;
          } else if (
            (direction === 'S' && currDir === 2) ||
            (direction === 'L' && currDir === 0) ||
            (direction === 'R' && currDir === 1)
          ) {
            x = x + 1 < grid[i].length ? x + 1 : 0;
            currDir = 2;
          } else if (
            (direction === 'S' && currDir === 3) ||
            (direction === 'L' && currDir === 1) ||
            (direction === 'R' && currDir === 0)
          ) {
            x = x - 1 >= 0 ? x - 1 : grid[i].length - 1;
            currDir = 3;
          }
        }
      }
    });
  });

  return answer.sort((a, b) => a - b);
}

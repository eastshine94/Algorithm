function solution(rectangle, characterX, characterY, itemX, itemY) {
  const map = Array.from(new Array(104), () =>
    Array.from(new Array(104), () => false)
  );
  rectangle.forEach(rect => {
    const [x1, y1, x2, y2] = rect;
    for (let i = x1 * 2; i <= x2 * 2; i++) {
      map[y1 * 2][i] = true;
      map[y2 * 2][i] = true;
    }
    for (let i = y1 * 2; i <= y2 * 2; i++) {
      map[i][x1 * 2] = true;
      map[i][x2 * 2] = true;
    }
  });

  rectangle.forEach(rect => {
    const [x1, y1, x2, y2] = rect;
    for (let i = y1 * 2 + 1; i < y2 * 2; i++) {
      for (let j = x1 * 2 + 1; j < x2 * 2; j++) {
        map[i][j] = false;
      }
    }
  });

  const bfs = [[characterY * 2, characterX * 2]];
  map[characterY * 2][characterX * 2] = false;

  let answer = 0;
  let xPos = [1, -1, 0, 0];
  let yPos = [0, 0, 1, -1];
  while (bfs.length > 0) {
    const len = bfs.length;
    for (let i = 0; i < len; i++) {
      const [y, x] = bfs.shift();
      if (x === itemX * 2 && y === itemY * 2) {
        return answer / 2;
      }

      for (let j = 0; j < 4; j++) {
        const moveY = y + yPos[j];
        const moveX = x + xPos[j];
        if (map[moveY][moveX]) {
          map[moveY][moveX] = false;
          bfs.push([moveY, moveX]);
        }
      }
    }

    answer++;
  }

  return -1;
}

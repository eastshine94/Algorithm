function solution(board) {
  var answer = -1;
  let startPos;
  const check = [];

  for (let i = 0; i < board.length; i++) {
    check.push([]);
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "R") {
        startPos = [i, j];
        check[i][j] = true;
      } else {
        check[i][j] = false;
      }
    }
  }

  const queue = [{ pos: startPos, count: 0 }];

  while (queue.length > 0) {
    const { pos, count } = queue.shift();
    const [y, x] = pos;
    if (board[y][x] === "G") {
      answer = count;
      break;
    }
    if (y + 1 < board.length && board[y + 1][x] !== "D") {
      for (let i = y + 1; i < board.length; i++) {
        if (board[i][x] === "D") {
          if (!check[i - 1][x]) {
            queue.push({ pos: [i - 1, x], count: count + 1 });
            check[i - 1][x] = true;
          }
          break;
        }
        if (i === board.length - 1 && !check[i][x]) {
          queue.push({ pos: [i, x], count: count + 1 });
          check[i][x] = true;
          break;
        }
      }
    }
    if (y - 1 >= 0 && board[y - 1][x] !== "D") {
      for (let i = y - 1; i >= 0; i--) {
        if (board[i][x] === "D") {
          if (!check[i + 1][x]) {
            queue.push({ pos: [i + 1, x], count: count + 1 });
            check[i + 1][x] = true;
          }

          break;
        }
        if (i === 0 && !check[i][x]) {
          queue.push({ pos: [i, x], count: count + 1 });
          check[i][x] = true;
          break;
        }
      }
    }

    if (x + 1 < board[0].length && board[y][x + 1] !== "D") {
      for (let i = x + 1; i < board[0].length; i++) {
        if (board[y][i] === "D") {
          if (!check[y][i - 1]) {
            queue.push({ pos: [y, i - 1], count: count + 1 });
            check[y][i - 1] = true;
          }
          break;
        }
        if (i === board[0].length - 1 && !check[y][i]) {
          queue.push({ pos: [y, i], count: count + 1 });
          check[y][i] = true;
          break;
        }
      }
    }
    if (x - 1 >= 0 && board[y][x - 1] !== "D") {
      for (let i = x - 1; i >= 0; i--) {
        if (board[y][i] === "D") {
          if (!check[y][i + 1]) {
            queue.push({ pos: [y, i + 1], count: count + 1 });
            check[y][i + 1] = true;
          }

          break;
        }
        if (i === 0 && !check[y][i]) {
          queue.push({ pos: [y, i], count: count + 1 });
          check[y][i] = true;
          break;
        }
      }
    }
  }

  return answer;
}

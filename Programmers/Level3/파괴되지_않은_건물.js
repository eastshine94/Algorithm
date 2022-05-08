function solution(board, skill) {
  let answer = 0;
  const accArr = Array.from(new Array(board.length + 1), () =>
    new Array(board[0].length + 1).fill(0)
  );
  skill.forEach(([type, r1, c1, r2, c2, degree]) => {
    accArr[r1][c1] += type === 2 ? degree : -degree;
    accArr[r2 + 1][c1] += type === 2 ? -degree : degree;
    accArr[r1][c2 + 1] += type === 2 ? -degree : degree;
    accArr[r2 + 1][c2 + 1] += type === 2 ? degree : -degree;
  });

  // 누적합 구하기
  for (let i = 1; i < accArr.length; i++) {
    accArr[i][0] += accArr[i - 1][0];
  }
  for (let i = 1; i < accArr[0].length; i++) {
    accArr[0][i] += accArr[0][i - 1];
  }
  for (let i = 1; i < accArr.length; i++) {
    for (let j = 1; j < accArr[0].length; j++) {
      accArr[i][j] +=
        accArr[i][j - 1] + accArr[i - 1][j] - accArr[i - 1][j - 1];
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] += accArr[i][j];
      if (board[i][j] > 0) {
        answer++;
      }
    }
  }
  return answer;
}

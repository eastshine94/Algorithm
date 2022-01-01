function solution(n, left, right) {
  let answer = [];
  let startRow = Math.floor(left / n);
  let startCol = left % n;
  let endRow = Math.floor(right / n);
  let endCol = right % n;

  for (let row = startRow; row <= endRow; row++) {
    for (let col = startCol; col < n; col++) {
      if (col <= row) {
        answer.push(row + 1);
      } else {
        answer.push(col + 1);
      }
      if (row === endRow && col === endCol) {
        return answer;
      }
    }
    startCol = 0;
  }

  return answer;
}

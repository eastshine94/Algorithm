function solution(rows, columns, queries) {
  var answer = [];
  const arr = Array.from(new Array(rows), (_, rowIdx) =>
    Array.from(new Array(columns), (_, colIdx) => rowIdx * columns + colIdx + 1)
  );

  queries.forEach(query => answer.push(getSol(arr, query)));

  return answer;
}

function getSol(arr, query) {
  const sy = query[0] - 1;
  const sx = query[1] - 1;
  const ey = query[2] - 1;
  const ex = query[3] - 1;

  let preVal = arr[sy][sx];
  let savedVal = arr[sy][sx];
  let min = preVal;

  // 오른쪽으로
  for (let i = sx + 1; i <= ex; i++) {
    savedVal = arr[sy][i];
    arr[sy][i] = preVal;
    preVal = savedVal;
    min = Math.min(min, savedVal);
  }

  //아래로
  for (let i = sy + 1; i <= ey; i++) {
    savedVal = arr[i][ex];
    arr[i][ex] = preVal;
    preVal = savedVal;
    min = Math.min(min, savedVal);
  }

  // 왼쪽으로
  for (let i = ex - 1; i >= sx; i--) {
    savedVal = arr[ey][i];
    arr[ey][i] = preVal;
    preVal = savedVal;
    min = Math.min(min, savedVal);
  }

  //위로
  for (let i = ey - 1; i >= sy; i--) {
    savedVal = arr[i][sx];
    arr[i][sx] = preVal;
    preVal = savedVal;
    min = Math.min(min, savedVal);
  }

  return min;
}

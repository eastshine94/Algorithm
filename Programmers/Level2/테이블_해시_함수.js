function solution(data, col, row_begin, row_end) {
  var answer = 0;
  const sortedData = data.sort((a, b) => {
    const idx = col - 1;
    return b[idx] === a[idx] ? b[0] - a[0] : a[idx] - b[idx];
  });
  for (let i = row_begin - 1; i <= row_end - 1; i++) {
    const row = sortedData[i];
    answer =
      answer ^
      row.reduce((acc, curr) => {
        return acc + (curr % (i + 1));
      }, 0);
  }

  return answer;
}

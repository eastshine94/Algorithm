function solution(cards) {
  var answer = 0;
  const n = cards.length;
  const visited = new Array(n).fill(false);
  const results = [];
  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }

    visited[i] = true;
    let v = cards[i];
    let count = 1;
    while (true) {
      const nextIdx = v - 1;
      if (visited[nextIdx] || nextIdx < 0 || nextIdx > n) {
        break;
      }
      count++;
      visited[nextIdx] = true;
      v = cards[nextIdx];
    }
    results.push(count);
  }
  const sortedResults = results.sort((a, b) => b - a);

  return sortedResults.length <= 1 ? 0 : sortedResults[0] * sortedResults[1];
}

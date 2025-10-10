function getMinDists(dist, s) {
  const n = dist.length;
  const result = Array.from({ length: n }, () => Number.MAX_SAFE_INTEGER);
  result[s] = 0;

  const visited = Array.from({ length: n }, () => false);

  const pq = [[0, s]];

  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [cost, node] = pq.shift();
    if (visited[node]) continue;
    visited[node] = true;

    for (let i = 0; i < n; i++) {
      if (dist[node][i] > 0) {
        const newCost = cost + dist[node][i];
        if (newCost < result[i]) {
          result[i] = newCost;
          pq.push([newCost, i]);
        }
      }
    }
  }

  return result;
}

function solution(n, s, a, b, fares) {
  var answer = Number.MAX_SAFE_INTEGER;
  const dist = Array.from({ length: n + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === j ? 0 : -1))
  );
  for (let [x, y, v] of fares) {
    dist[x][y] = v;
    dist[y][x] = v;
  }

  const fromS = getMinDists(dist, s);
  const fromA = getMinDists(dist, a);
  const fromB = getMinDists(dist, b);

  for (let i = 1; i <= n; i++) {
    const sum = fromS[i] + fromA[i] + fromB[i];
    if (sum < answer) answer = sum;
  }

  return answer;
}

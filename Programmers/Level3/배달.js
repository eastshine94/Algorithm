function solution(N, road, K) {
  const decidedNode = new Set();
  const minDists = new Array(N).fill(999999999);
  minDists[0] = 0;
  const roadArr = Array.from(Array(N), () => new Array(N).fill(999999999));
  for (let val of road) {
    const x = val[0] - 1;
    const y = val[1] - 1;
    const v = Math.min(roadArr[x][y], val[2]);
    roadArr[x][y] = v;
    roadArr[y][x] = v;
  }
  let selectedMinDist = 0;
  let i = 0;
  let count = 0;
  while (count < N) {
    let min = 999999999;
    let minIdx = 0;
    for (let j = 1; j < N; j++) {
      if (decidedNode.has(j)) continue;
      const dist = roadArr[i][j] + selectedMinDist;
      const currDist = minDists[j];
      if (dist >= 999999999) {
        if (min > currDist) {
          min = currDist;
          minIdx = j;
        }
        continue;
      }
      if (currDist > dist) {
        minDists[j] = dist;
      }
      if (min > minDists[j]) {
        min = minDists[j];
        minIdx = j;
      }
    }
    decidedNode.add(minIdx);
    selectedMinDist = min;
    i = minIdx;
    count++;
  }

  return minDists.filter(val => val <= K).length;
}

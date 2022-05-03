function solution(N, stages) {
  const answer = Array.from(new Array(N), (_, idx) => idx + 1);
  const remainStage = new Array(N + 2).fill(0);
  const passStage = new Array(N + 2).fill(0);
  stages.forEach(s => {
    remainStage[s]++;
  });
  passStage[1] = stages.length;
  for (let i = 2; i <= N; i++) {
    passStage[i] = passStage[i - 1] - remainStage[i - 1];
  }

  return answer.sort((a, b) => {
    const rate1 = remainStage[a] / passStage[a];
    const rate2 = remainStage[b] / passStage[b];
    return rate2 - rate1;
  });
}

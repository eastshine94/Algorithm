function solution(players, m, k) {
  var answer = 0;
  const schdule = new Array(players.length).fill(0);
  players.forEach((player, idx) => {
    const currLimit = schdule[idx];
    const required = Math.floor(player / m) - currLimit;

    if (required > 0) {
      answer += required;
      for (let i = idx; i < Math.min(idx + k, schdule.length); i++) {
        schdule[i] += required;
      }
    }
  });
  return answer;
}

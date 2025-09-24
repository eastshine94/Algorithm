function solution(players, callings) {
  const pos = new Map();
  players.forEach((player, idx) => {
    pos.set(player, idx);
  });

  for (const call of callings) {
    const curIdx = pos.get(call);
    if (curIdx > 0) {
      const frontPlayer = players[curIdx - 1];

      players[curIdx - 1] = call;
      players[curIdx] = frontPlayer;

      pos.set(call, curIdx - 1);
      pos.set(frontPlayer, curIdx);
    }
  }

  return players;
}

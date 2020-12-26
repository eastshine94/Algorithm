function solution(dirs) {
  var answer = 0;
  const move = new Set();
  let point = [0, 0];
  for (let c of dirs) {
    let x = point[0];
    let y = point[1];
    if (c === 'L') {
      if (x === -5) continue;
      const key1 = `[${x},${y}],[${x - 1},${y}]`;
      const key2 = `[${x - 1},${y}],[${x},${y}]`;
      if (!move.has(key1)) {
        move.add(key1);
        move.add(key2);
        answer++;
      }
      point[0] = x - 1;
    } else if (c === 'R') {
      if (x === 5) continue;
      const key1 = `[${x},${y}],[${x + 1},${y}]`;
      const key2 = `[${x + 1},${y}],[${x},${y}]`;
      if (!move.has(key1)) {
        move.add(key1);
        move.add(key2);
        answer++;
      }
      point[0] = x + 1;
    } else if (c === 'U') {
      if (y === 5) continue;
      const key1 = `[${x},${y}],[${x},${y + 1}]`;
      const key2 = `[${x},${y + 1}],[${x},${y}]`;
      if (!move.has(key1)) {
        move.add(key1);
        move.add(key2);
        answer++;
      }
      point[1] = y + 1;
    } else if (c === 'D') {
      if (y === -5) continue;
      const key1 = `[${x},${y}],[${x},${y - 1}]`;
      const key2 = `[${x},${y - 1}],[${x},${y}]`;
      if (!move.has(key1)) {
        move.add(key1);
        move.add(key2);
        answer++;
      }
      point[1] = y - 1;
    }
  }
  return answer;
}

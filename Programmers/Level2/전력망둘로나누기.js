function getTowerNum(map, group, visited) {
  let num = 1;
  while (group.length > 0) {
    const node = group.pop();
    map[node].forEach(val => {
      if (!visited[val]) {
        visited[val] = true;
        group.push(val);
        num++;
      }
    });
  }
  return num;
}

function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;

  const map = {};
  wires.forEach(wire => {
    const [v1, v2] = wire;
    map[v1] = !!map[v1] ? [...map[v1], v2] : [v2];
    map[v2] = !!map[v2] ? [...map[v2], v1] : [v1];
  });

  wires.forEach(wire => {
    const [v1, v2] = wire;
    const visited = new Array(n + 1).fill(false);
    visited[v1] = true;
    visited[v2] = true;
    const group = map[v1].length < map[v2].length ? [v1] : [v2];
    const num = getTowerNum(map, group, visited);

    const result = Math.abs(2 * num - n);
    answer = Math.min(answer, result);
  });
  return answer;
}

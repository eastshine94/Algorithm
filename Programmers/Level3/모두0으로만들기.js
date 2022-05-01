function solution(a, edges) {
  const sum = a.reduce((acc, curr) => acc + curr, 0);
  if (sum !== 0) {
    return -1;
  }

  const map = {};
  edges.forEach(([u, v]) => {
    map[u] ? map[u].push(v) : (map[u] = [v]);
    map[v] ? map[v].push(u) : (map[v] = [u]);
  });

  let answer = 0n;
  let pointer = 0;
  const history = [[0, null]];

  while (history.length > pointer) {
    const node = history[pointer];
    const [idx, parent] = node;

    map[idx].forEach(node => {
      if (node !== parent) {
        history.push([node, idx]);
      }
    });
    pointer++;
  }

  for (let i = history.length - 1; i >= 0; i--) {
    const [idx, parent] = history[i];
    const val = a[idx];
    a[parent] += val;
    answer += BigInt(Math.abs(val));
  }

  return a[0] === 0 ? answer : -1;
}

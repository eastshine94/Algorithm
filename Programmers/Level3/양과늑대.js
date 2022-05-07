function solution(info, edges) {
  let answer = 0;
  const map = Array.from(new Array(info.length), () => []);
  const check = new Array(info.length).fill(false);
  edges.forEach(n => {
    map[n[0]].push(n[1]);
    map[n[1]].push(n[0]);
  });

  const dfs = (search, result) => {
    if (search.length === 0) {
      return;
    }

    const idx = search.pop();
    const clone = { ...result };
    check[idx] = true;
    if (info[idx] === 0) {
      clone.sheep++;
      answer = Math.max(answer, clone.sheep);
    } else {
      clone.wolf++;
      if (clone.sheep <= clone.wolf) {
        check[idx] = false;
        return;
      }
    }

    const nextSearch = [...search, ...map[idx].filter(val => !check[val])];

    nextSearch.forEach((_, idx) => {
      dfs([...nextSearch.slice(idx), ...nextSearch.slice(0, idx)], clone);
    });

    check[idx] = false;
  };
  dfs([0], { sheep: 0, wolf: 0 });
  return answer;
}

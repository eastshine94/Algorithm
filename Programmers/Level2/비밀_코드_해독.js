function findAnswer(n, q, ans, start, save) {
  let sum = 0;
  if (save.length === 5) {
    for (let i = 0; i < q.length; i++) {
      let count = 0;
      const target = q[i];

      for (let v of save) {
        if (target.find((val) => val === v)) {
          count++;
        }
      }
      if (count !== ans[i]) {
        save.pop();
        return 0;
      }
    }

    save.pop();
    return 1;
  }

  for (let i = start; i <= Math.min(n, start + n - 5); i++) {
    save.push(i);
    sum += findAnswer(n, q, ans, i + 1, save);
  }
  save.pop();
  return sum;
}

function solution(n, q, ans) {
  return findAnswer(n, q, ans, 1, []);
}

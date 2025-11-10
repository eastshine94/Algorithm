const COST_MATRIX = [
  [1, 1, 1],
  [5, 1, 1],
  [25, 5, 1],
];
const USING_NUM = 5;

function solution(picks, minerals) {
  var answer = Number.MAX_SAFE_INTEGER;

  const new_minerals = minerals.map((v) =>
    v === "diamond" ? 0 : v === "iron" ? 1 : 2
  );

  const len = minerals.length;
  let pick_num = Math.ceil(len / USING_NUM);
  const new_picks = [];
  picks.forEach((v, i) => {
    const n = v >= pick_num ? pick_num : v;
    new_picks.push(...Array(n).fill(i));
    pick_num -= n;
  });

  const used = Array(pick_num).fill(false);

  function backtrack(path) {
    if (path.length === new_picks.length) {
      let cost = 0;
      path.forEach((v, i) => {
        for (
          let j = i * USING_NUM;
          j < Math.min(new_minerals.length, i * USING_NUM + USING_NUM);
          j++
        ) {
          cost += COST_MATRIX[v][new_minerals[j]];
        }
      });

      answer = Math.min(answer, cost);
      return;
    }

    for (let i = 0; i < new_picks.length; i++) {
      if (used[i]) continue;

      if (i > 0 && new_picks[i] === new_picks[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      path.push(new_picks[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }
  backtrack([]);

  return answer;
}

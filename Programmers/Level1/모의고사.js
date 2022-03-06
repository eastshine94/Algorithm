function solution(answers) {
  let score = [0, 0, 0];
  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((val, idx) => {
    if (val === pattern1[idx % 5]) {
      score[0]++;
    }
    if (val === pattern2[idx % 8]) {
      score[1]++;
    }
    if (val === pattern3[idx % 10]) {
      score[2]++;
    }
  });
  const max = Math.max(...score);
  return score
    .map((val, idx) => {
      if (val === max) {
        return idx + 1;
      }
      return;
    })
    .filter(val => val);
}

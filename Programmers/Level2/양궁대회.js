function solution(n, info) {
  let answer = [-1];
  let hitList = new Array(info.length).fill(0);
  let max = -1000;
  const apScore = -info.reduce(
    (acc, curr, idx) => (curr > 0 ? acc + (10 - idx) : acc),
    0
  );

  const findList = (prevList, currList) => {
    for (let i = prevList.length - 1; i >= 0; i--) {
      const a = prevList[i];
      const b = currList[i];
      if (a > b) {
        return [...prevList];
      } else if (a < b) {
        return [...currList];
      }
    }
    return [...prevList];
  };

  const findSol = (n, idx, score) => {
    if (idx === info.length - 1 || n === 0) {
      if (score > 0 && max <= score) {
        hitList[info.length - 1] = n;
        if (max === score) {
          answer = findList(answer, hitList);
          return;
        }

        answer = [...hitList];
        max = score;
      }
      return;
    }

    for (let i = idx; i < info.length; i++) {
      const hitNum = info[i];
      if (n >= hitNum + 1) {
        hitList[i] = hitNum + 1;
        if (hitNum > 0) {
          findSol(n - (hitNum + 1), i + 1, score + (10 - i) * 2);
        } else {
          findSol(n - (hitNum + 1), i + 1, score + (10 - i));
        }
      } else {
        findSol(n, i + 1, score);
      }
      hitList[i] = 0;
    }
  };

  findSol(n, 0, apScore);
  return answer;
}

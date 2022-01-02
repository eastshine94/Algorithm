function solution(arr) {
  const answer = [0, 0];

  const getSol = subArr => {
    const len = subArr.length;
    if (len === 1) {
      answer[subArr[0][0]]++;
      return;
    }

    const val = subArr[0][0];

    let flag = true;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (val !== subArr[i][j]) {
          flag = false;
          break;
        }
      }
      if (!flag) break;
    }

    if (flag) {
      answer[val]++;
      return;
    } else {
      const subArr1 = subArr.map(row => row.splice(0, len / 2));
      const subArr2 = subArr;
      const subArr3 = subArr1.splice(0, len / 2);
      const subArr4 = subArr2.splice(0, len / 2);
      getSol(subArr1);
      getSol(subArr2);
      getSol(subArr3);
      getSol(subArr4);
      return;
    }
  };

  getSol(arr);
  return answer;
}

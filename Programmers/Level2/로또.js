function solution(lottos, win_nums) {
  // 맞을 수 있는 수 [최저, 최대]
  const rightNums = [0, 0];

  lottos.forEach(num => {
    if (num === 0) {
      rightNums[0]++;
    } else if (win_nums.find(winNum => winNum === num)) {
      rightNums[0]++;
      rightNums[1]++;
    }
  });

  let answer = [calRank(rightNums[0]), calRank(rightNums[1])];
  return answer;
}

const calRank = num => {
  switch (num) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
};

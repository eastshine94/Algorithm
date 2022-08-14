function solution(begin, end) {
  const answer = [];
  for (let i = begin; i <= end; i++) {
    if (i === 1) {
      answer.push(0);
      continue;
    }
    let isFind = false;
    for (let j = 2; j < Math.floor(Math.sqrt(i)) + 1; j++) {
      if (i % j === 0) {
        answer.push(i / j);
        isFind = true;
        break;
      }
    }
    if (!isFind) {
      answer.push(1);
    }
  }
  return answer;
}

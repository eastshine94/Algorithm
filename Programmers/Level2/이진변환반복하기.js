function solution(s) {
  const answer = [0, 0];

  const removeZero = () => {
    let str = '';
    for (let c of s) {
      c === '0' ? answer[1]++ : (str += c);
    }
    s = str;
  };

  while (true) {
    if (s === '1') break;
    removeZero();
    s = Number(s.length).toString(2);
    answer[0]++;
  }

  return answer;
}

function solution(word) {
  let answer = -1;
  let flag = false;
  const arr = ['A', 'E', 'I', 'O', 'U'];

  const getSol = w => {
    answer++;
    if (word === w) {
      flag = true;
      return;
    }
    if (w.length === 5) return;
    for (let i = 0; i < arr.length; i++) {
      if (flag) return;

      getSol(w + arr[i]);
    }
  };

  getSol('', 0);

  return answer;
}

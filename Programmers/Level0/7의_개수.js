function solution(array) {
  let answer = 0;
  for (let num of array) {
    const matchList = String(num).match(/7/gi);
    if (matchList) {
      answer += matchList.length;
    }
  }
  return answer;
}

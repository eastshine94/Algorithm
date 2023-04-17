function solution(A, B) {
  var answer = -1;
  if (A === B) {
    return 0;
  }
  for (let i = 1; i < A.length; i++) {
    const word = A.substr(-i) + A.substring(0, A.length - i);
    if (B === word) {
      answer = i;
      break;
    }
  }
  return answer;
}

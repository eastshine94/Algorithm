function solution(n, w, num) {
  const totalRow = Math.ceil(n / w);
  const topLineNum = n % w || w;

  const targetRow = Math.ceil(num / w);
  const targetIdx = num % w || w;
  const targetCol = targetRow % 2 === 1 ? targetIdx : w - targetIdx + 1;

  var answer = totalRow - targetRow + 1;
  if (totalRow % 2 === 1 && topLineNum < targetCol) {
    answer--;
  } else if (totalRow % 2 === 0 && w - topLineNum + 1 > targetCol) {
    answer--;
  }

  return answer;
}

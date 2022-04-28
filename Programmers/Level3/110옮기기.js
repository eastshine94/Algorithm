function getResult(str) {
  let count = 0;
  let oneNum = 0;
  let text = '';
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char === '0') {
      if (oneNum < 2) {
        text += '1'.repeat(oneNum) + '0';
        oneNum = 0;
      } else {
        oneNum -= 2;
        count++;
      }
    } else {
      oneNum++;
    }
  }
  text += '1'.repeat(oneNum);
  const rep = '110'.repeat(count);
  const len = text.length;
  for (let i = len - 1; i >= 0; i--) {
    if (text.charAt(i) === '0') {
      return text.substring(0, i + 1) + rep + text.substring(i + 1);
    }
  }
  return rep + text;
}

function solution(s) {
  const answer = [];
  s.forEach(str => {
    const result = getResult(str);
    answer.push(result);
  });
  return answer;
}

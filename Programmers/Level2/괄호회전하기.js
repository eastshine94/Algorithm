const pairs = {
  '[': ']',
  '(': ')',
  '{': '}'
};

function findSol(arr) {
  const checkArr = [];
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (pairs[checkArr[checkArr.length - 1]] === arr[i]) {
      checkArr.pop();
    } else {
      checkArr.push(arr[i]);
    }
    if (checkArr.length === 0) {
      answer++;
    }
  }

  if (checkArr.length === 0) {
    return answer;
  }
  return -1;
}

function solution(s) {
  if (s.length % 2 !== 0) {
    return 0;
  }

  const strToArr = s.split('');

  for (let i = 0; i < strToArr.length; i++) {
    strToArr.push(strToArr.shift());
    if (Object.values(pairs).includes(strToArr[0])) {
      continue;
    }
    const val = findSol(strToArr);
    if (val > 0) {
      return val;
    }
  }

  return 0;
}

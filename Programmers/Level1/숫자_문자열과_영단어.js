function solution(s) {
  const arr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ];
  let answer = s;
  arr.forEach((val, idx) => {
    const regEx = new RegExp(`${val}`, 'g');
    answer = answer.replace(regEx, idx);
  });

  return parseInt(answer);
}

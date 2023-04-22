const multiply = (num_list) => {
  return num_list.reduce((curr, acc) => curr * acc, 1);
};

const sumAndsquare = (num_list) => {
  const sum = num_list.reduce((curr, acc) => curr + acc, 0);
  return sum ** 2;
};

function solution(num_list) {
  return multiply(num_list) < sumAndsquare(num_list) ? 1 : 0;
}

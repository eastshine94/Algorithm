function solution(numbers) {
  return numbers.reduce((curr, acc) => curr + acc, 0) / numbers.length;
}

function solution(sides) {
  const sortedArr = sides.sort((a, b) => a - b);
  return sortedArr[2] < sortedArr[0] + sortedArr[1] ? 1 : 2;
}

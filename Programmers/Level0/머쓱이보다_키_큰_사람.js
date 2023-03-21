function solution(array, height) {
  return array.filter((h) => height < h).length;
}

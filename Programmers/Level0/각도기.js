function solution(angle) {
  return [0, 90, 91, 180, 181].findIndex((val) => val > angle);
}

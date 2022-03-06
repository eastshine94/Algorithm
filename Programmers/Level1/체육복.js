function solution(n, lost, reserve) {
  const arr = new Array(n).fill(1);
  lost.forEach(val => {
    arr[val - 1]--;
  });
  reserve.forEach(val => {
    arr[val - 1]++;
  });
  arr.forEach((val, idx) => {
    if (val === 0) {
      if (idx - 1 >= 0 && arr[idx - 1] === 2) {
        arr[idx - 1]--;
        arr[idx]++;
      } else if (idx + 1 < arr.length && arr[idx + 1] === 2) {
        arr[idx + 1]--;
        arr[idx]++;
      }
    }
  });

  return arr.filter(val => val >= 1).length;
}

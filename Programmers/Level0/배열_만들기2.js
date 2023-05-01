function solution(l, r) {
  const arr = ["5"];
  const numOfArr = [];

  while (true) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      const val = arr.shift();
      arr.push(val + "0");
      arr.push(val + "5");
      numOfArr.push(Number(val));
    }

    if (arr[0].length >= 7) {
      for (let i = 0; i < len; i++) {
        numOfArr.push(Number(arr[i]));
      }
      break;
    }
  }
  const s = numOfArr.findIndex((val) => val >= l);
  const e = numOfArr.findIndex((val) => val > r);
  return s === e ? [-1] : numOfArr.slice(s, e);
}

const isArithmetic = (arr) => {
  return arr[1] - arr[0] === arr[2] - arr[1];
};

function solution(common) {
  const n = common.length;
  if (isArithmetic(common)) {
    const d = common[1] - common[0];
    return common[0] + n * d;
  } else {
    const r = common[1] / common[0];
    return common[0] * r ** n;
  }
}

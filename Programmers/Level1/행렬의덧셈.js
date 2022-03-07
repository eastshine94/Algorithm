function solution(arr1, arr2) {
  return arr1.map((subArr1, i) => {
    return subArr1.map((val, j) => val + arr2[i][j]);
  });
}

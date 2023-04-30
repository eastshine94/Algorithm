function solution(arr, queries) {
  for (const [a, b] of queries) {
    const val1 = arr[a];
    arr[a] = arr[b];
    arr[b] = val1;
  }

  return arr;
}

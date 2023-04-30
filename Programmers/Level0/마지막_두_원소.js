function solution(num_list) {
  const lastVal = num_list.pop();
  const prevVal = num_list.pop();
  const newVal = lastVal > prevVal ? lastVal - prevVal : 2 * lastVal;
  return [...num_list, prevVal, lastVal, newVal];
}

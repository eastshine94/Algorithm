function solution(numbers) {
  const total_nums = Array.from(new Array(10), (val, idx) => idx);
  numbers.forEach(val => {
    total_nums[val] = 0;
  });
  return total_nums.reduce((acc, curr) => acc + curr, 0);
}

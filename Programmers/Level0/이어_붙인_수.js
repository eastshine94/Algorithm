function solution(num_list) {
  let odd = "";
  let even = "";
  for (let num of num_list) {
    if (num % 2 === 0) {
      odd += num;
    } else {
      even += num;
    }
  }
  return Number(odd) + Number(even);
}

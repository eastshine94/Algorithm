function solution(k, tangerine) {
  var answer = 0;
  const data = {};
  for (let val of tangerine) {
    if (data[val]) {
      data[val] += 1;
    } else {
      data[val] = 1;
    }
  }
  const values = Object.values(data).sort((a, b) => b - a);
  let sum = 0;
  for (let v of values) {
    answer++;
    sum += v;
    if (sum >= k) {
      return answer;
    }
  }
  return answer;
}

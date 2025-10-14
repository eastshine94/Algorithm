function solution(topping) {
  var answer = 0;
  let count1 = 0;
  let count2 = 0;
  const data1 = {};
  const data2 = {};

  for (let t of topping) {
    if (data1[t]) {
      data1[t]++;
    } else {
      data1[t] = 1;
      data2[t] = 0;
      count1++;
    }
  }

  for (let t of topping) {
    data1[t]--;
    data2[t]++;
    if (data1[t] === 0) {
      count1--;
    }
    if (data2[t] === 1) {
      count2++;
    }

    if (count1 === count2) {
      answer++;
    }
  }

  return answer;
}

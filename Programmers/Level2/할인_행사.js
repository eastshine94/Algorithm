function compareWantData(wantData, currDiscount) {
  for (let key of Object.keys(wantData)) {
    if (wantData[key] !== currDiscount[key]) {
      return false;
    }
  }

  return true;
}

function solution(want, number, discount) {
  var answer = 0;
  const wantData = {};
  const currDiscount = {};
  for (let i = 0; i < want.length; i++) {
    wantData[want[i]] = number[i];
  }

  for (let i = 0; i < discount.length; i++) {
    const v = discount[i];
    if (currDiscount[v]) {
      currDiscount[v] += 1;
    } else {
      currDiscount[v] = 1;
    }

    if (i >= 9) {
      if (compareWantData(wantData, currDiscount)) {
        answer++;
      }
      currDiscount[discount[i - 9]] -= 1;
    }
  }

  return answer;
}

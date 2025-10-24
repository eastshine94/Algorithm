const PRICE = 100;
function solution(enroll, referral, seller, amount) {
  const data = {};

  enroll.forEach((val) => {
    data[val] = { parent: null, child: [], income: 0 };
  });

  referral.forEach((val, idx) => {
    if (data[val]) {
      data[val].child.push(enroll[idx]);
      data[enroll[idx]].parent = val;
    }
  });
  amount.forEach((val, idx) => {
    let person = seller[idx];
    let income = val * PRICE;
    while (income >= 1) {
      const d = Math.floor(income / 10);
      const nextPerson = data[person].parent;

      data[person].income += income - d;

      if (!nextPerson) {
        break;
      }
      person = nextPerson;
      income = d;
    }
  });

  return enroll.map((val) => data[val].income);
}

solution(
  ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
  ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
  ["young", "john", "tod", "emily", "mary"],
  [12, 4, 2, 5, 10]
);

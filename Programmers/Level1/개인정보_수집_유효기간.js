const calcDate = (date, addingMonth) => {
  const [year, month, day] = date.split(".").map(Number);
  return year * 12 * 28 + (month + addingMonth) * 28 + day;
};

function solution(today, terms, privacies) {
  var answer = [];
  const termsObj = {};
  terms.forEach((term) => {
    const [policy, m] = term.split(" ");
    termsObj[policy] = +m;
  });

  privacies.forEach((v, idx) => {
    const [date, policy] = v.split(" ");
    const addingMonth = termsObj[policy] ?? 0;
    const calcToday = calcDate(today, 0);
    const result = calcDate(date, addingMonth);
    if (calcToday >= result) {
      answer.push(idx + 1);
    }
  });

  return answer;
}

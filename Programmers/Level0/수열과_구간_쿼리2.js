function solution(arr, queries) {
  const answer = [];
  for (const [s, e, k] of queries) {
    const sectionArr = arr.slice(s, e + 1).filter((val) => val > k);
    if (sectionArr.length === 0) {
      answer.push(-1);
    } else {
      answer.push(Math.min(...sectionArr));
    }
  }

  return answer;
}

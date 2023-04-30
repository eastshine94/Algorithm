function solution(n, control) {
  let answer = n;
  for (const w of control) {
    if (w === "w") {
      answer += 1;
    } else if (w === "s") {
      answer -= 1;
    } else if (w === "d") {
      answer += 10;
    } else {
      answer -= 10;
    }
  }

  return answer;
}

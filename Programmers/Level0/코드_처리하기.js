function solution(code) {
  let mode = 0;
  let answer = "";

  for (let i = 0; i < code.length; i++) {
    const c = code[i];
    if (c === "1") {
      mode = mode === 1 ? 0 : 1;
      continue;
    }

    if (mode === 0 && i % 2 === 0) {
      answer += c;
    } else if (mode === 1 && i % 2 === 1) {
      answer += c;
    }
  }

  return !!answer ? answer : "EMPTY";
}

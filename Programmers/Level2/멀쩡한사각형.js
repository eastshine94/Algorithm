function solution(w, h) {
  let answer = 0;
  for (let i = 1; i < w; i++) {
    answer += Math.floor((h * i) / w);
  }

  return answer * 2;
}

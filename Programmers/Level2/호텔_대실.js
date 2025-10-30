function normalize(time) {
  const [hour, minute] = time.split(":").map((v) => Number(v));
  return hour * 60 + minute;
}

function solution(book_time) {
  let answer = 0;

  const normalizedBookTime = book_time.map((t) => [
    normalize(t[0]),
    normalize(t[1]) + 10,
  ]);

  for (let i = 0; i < 24 * 60; i++) {
    let room = 0;
    for (const [start, end] of normalizedBookTime) {
      if (start <= i && i < end) {
        room++;
      }
    }
    answer = Math.max(answer, room);
  }

  return answer;
}

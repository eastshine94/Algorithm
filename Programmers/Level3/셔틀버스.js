function getResult(time) {
  const hour = Math.floor(time / 60);
  const min = time - hour * 60;
  return `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
}

function solution(n, t, m, timetable) {
  const lastTime = 9 * 60 + (n - 1) * t;
  let arriveTime = 9 * 60;
  let pointer = 0;
  const changeTimeTable = timetable
    .map(time => {
      const [hour, min] = time.split(':');
      return Number(hour) * 60 + Number(min);
    })
    .filter(val => val <= lastTime)
    .sort((a, b) => a - b);

  const len = changeTimeTable.length;

  for (let i = 0; i < n - 1; i++) {
    let count = 0;
    for (let j = pointer; j < len; j++) {
      const time = changeTimeTable[j];
      // 버스 떠남
      if (time > arriveTime) {
        break;
      }
      pointer++;
      count++;
      // 버스 탑승 인원 다 태움
      if (count >= m) {
        break;
      }
    }
    arriveTime += t;
  }

  // 막차가 여유로움
  if (len - pointer < m) {
    return getResult(lastTime);
  }
  // 기다리는 크루 중 최소 1명 보다는 먼저가야 함
  else {
    // 몇 명보다 먼저 갈 것인가?
    const num = len - pointer - m + 1;
    return getResult(changeTimeTable[len - num] - 1);
  }
}

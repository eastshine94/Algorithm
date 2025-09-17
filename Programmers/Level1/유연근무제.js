function solution(schedules, timelogs, startday) {
  let answer = 0;

  timelogs.forEach((timeLog, timeLogIdx) => {
    const schedule = schedules[timeLogIdx];
    let hour = Math.floor(schedule / 100);
    let min = (schedule % 100) + 10;
    if (min >= 60) {
      min -= 60;
      hour += 1;
    }
    let time = hour * 100 + min;

    if (
      timeLog.every((t, logIdx) => {
        const day = (startday - 1 + logIdx) % 7;
        if (day === 5 || day === 6) {
          return true;
        }
        return time >= t;
      })
    ) {
      answer++;
      return;
    }
  });

  return answer;
}

function calTime(inTime, outTime) {
  const inMin = inTime.split(':').reduce((acc, curr, idx) => {
    return idx === 0 ? acc + Number(curr) * 60 : acc + Number(curr);
  }, 0);
  const outMin = outTime.split(':').reduce((acc, curr, idx) => {
    return idx === 0 ? acc + Number(curr) * 60 : acc + Number(curr);
  }, 0);
  return outMin - inMin;
}

function solution(fees, records) {
  const todayTimeRecords = new Map();
  const parkList = new Map();
  records.forEach(record => {
    const [time, num, action] = record.split(' ');
    if (action === 'IN') {
      parkList.set(num, time);
    } else {
      const totalTime = calTime(parkList.get(num), time);
      todayTimeRecords.has(num)
        ? todayTimeRecords.set(num, todayTimeRecords.get(num) + totalTime)
        : todayTimeRecords.set(num, totalTime);

      parkList.delete(num);
    }
  });

  for (let [key, time] of parkList) {
    const totalTime = calTime(time, '23:59');
    todayTimeRecords.has(key)
      ? todayTimeRecords.set(key, todayTimeRecords.get(key) + totalTime)
      : todayTimeRecords.set(key, totalTime);
  }

  const answer = [...todayTimeRecords]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(record => {
      const diff = record[1] - fees[0];
      return diff <= 0
        ? fees[1]
        : fees[1] + Math.ceil(diff / fees[2]) * fees[3];
    });

  return answer;
}

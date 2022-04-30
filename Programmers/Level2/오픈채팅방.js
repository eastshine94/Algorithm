function solution(record) {
  const answer = [];
  const userInfo = {};
  record.forEach(val => {
    const [command, id, name] = val.split(' ');
    if (command === 'Enter') {
      userInfo[id] = name;
      answer.push({ id, msg: '님이 들어왔습니다.' });
    } else if (command === 'Leave') {
      answer.push({ id, msg: '님이 나갔습니다.' });
    } else {
      userInfo[id] = name;
    }
  });

  return answer.map(history => `${userInfo[history.id]}${history.msg}`);
}

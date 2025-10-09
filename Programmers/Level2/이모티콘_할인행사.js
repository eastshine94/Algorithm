function solution(users, emoticons) {
  var answer = [0, 0];
  const list = [];
  function find(startIdx) {
    const len = emoticons.length;
    if (list.length === len || startIdx >= len) {
      const result = [0, 0];

      for (let user of users) {
        const [percent, limit] = user;
        let sum = 0;
        let flag = false;
        for (let i = 0; i < list.length; i++) {
          const val = list[i];
          if (val >= percent) {
            sum += Math.ceil(emoticons[i] * (1 - val / 100));
            if (sum >= limit) {
              flag = true;
              break;
            }
          }
        }
        if (flag) {
          result[0] += 1;
        } else {
          result[1] += sum;
        }
      }
      if (
        result[0] > answer[0] ||
        (result[0] === answer[0] && result[1] > answer[1])
      ) {
        answer = [...result];
      }
      return;
    }

    const percents = [40, 30, 20, 10];
    for (let percent of percents) {
      list.push(percent);
      find(startIdx + 1);
      list.pop();
    }
  }
  find(0);
  return answer;
}

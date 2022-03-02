function solution(id_list, report, k) {
  const answer = [];
  const report_list = {};
  const ban_list = {};
  const reports = [...new Set(report)].map(val => val.split(' '));

  reports.forEach(([user, reportedUser]) => {
    report_list[user] = report_list[user]
      ? [...report_list[user], reportedUser]
      : [reportedUser];
    ban_list[reportedUser] = ban_list[reportedUser]
      ? ban_list[reportedUser] + 1
      : 1;
  });

  id_list.forEach(id => {
    let count = 0;
    if (report_list[id]) {
      report_list[id].forEach(user => {
        if (ban_list[user] >= k) {
          count++;
        }
      });
    }

    answer.push(count);
  });

  return answer;
}

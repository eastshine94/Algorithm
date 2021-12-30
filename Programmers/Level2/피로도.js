function solution(k, dungeons) {
  let answer = -1;
  const visited = new Array(dungeons.length).fill(false);
  function find(k, num) {
    answer = Math.max(answer, num);
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && k >= dungeons[i][0]) {
        visited[i] = true;
        find(k - dungeons[i][1], num + 1);
        visited[i] = false;
      }
    }
  }
  find(k, 0);
  return answer;
}

function solution(park, routes) {
  var answer = [];

  park.forEach((v, i) => {
    for (let s of v) {
      if (s === "S") {
        answer = [i, v.indexOf(s)];
        return;
      }
    }
  });

  for (let route of routes) {
    const [d, n] = route.split(" ");
    let [x, y] = answer;
    let flag = true;

    for (let i = 0; i < +n; i++) {
      if (d === "E") y++;
      if (d === "W") y--;
      if (d === "S") x++;
      if (d === "N") x--;

      if (
        x < 0 ||
        y < 0 ||
        x >= park.length ||
        y >= park[0].length ||
        park[x][y] === "X"
      ) {
        flag = false;
        break;
      }
    }

    if (flag) answer = [x, y];
  }

  return answer;
}

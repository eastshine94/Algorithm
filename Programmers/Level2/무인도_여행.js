const search = (maps, x, y, check, result) => {
  let sum = result;

  if (check[y][x]) {
    return 0;
  }
  check[y][x] = true;
  if (maps[y][x] === "X") {
    return 0;
  }

  if (y + 1 < maps.length) {
    sum += search(maps, x, y + 1, check, result);
  }

  if (y - 1 >= 0) {
    sum += search(maps, x, y - 1, check, result);
  }

  if (x + 1 < maps[0].length) {
    sum += search(maps, x + 1, y, check, result);
  }

  if (x - 1 >= 0) {
    sum += search(maps, x - 1, y, check, result);
  }

  return sum + Number(maps[y][x]);
};

function solution(maps) {
  var answer = [];
  const check = Array.from({ length: maps.length }, () => {
    return Array.from({ length: maps[0].length }, () => false);
  });
  for (let i = 0; i < maps.length; i++) {
    const row = maps[i];
    for (let j = 0; j < row.length; j++) {
      const result = search(maps, j, i, check, 0);
      if (result > 0) {
        answer.push(result);
      }
    }
  }
  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}

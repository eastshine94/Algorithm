const checkUpward = (place, x, y) => {
  if (y - 1 >= 0) {
    const value = place[y - 1][x];
    if (value === 'P') {
      return false;
    }
    if (y - 2 >= 0) {
      if (value !== 'X' && place[y - 2][x] === 'P') {
        return false;
      }
    }
  }
  return true;
};

const checkDownward = (place, x, y) => {
  if (y + 1 < place.length) {
    const value = place[y + 1][x];
    if (value === 'P') {
      return false;
    }
    if (y + 2 < place.length) {
      if (value !== 'X' && place[y + 2][x] === 'P') {
        return false;
      }
    }
  }
  return true;
};

const checkRightward = (place, x, y) => {
  if (x + 1 < place[0].length) {
    const value = place[y][x + 1];
    if (value === 'P') {
      return false;
    }
    if (x + 2 < place[0].length) {
      if (value !== 'X' && place[y][x + 2] === 'P') {
        return false;
      }
    }
  }
  return true;
};

const checkLeftward = (place, x, y) => {
  if (x - 1 >= 0) {
    const value = place[y][x - 1];
    if (value === 'P') {
      return false;
    }
    if (x - 2 >= 0) {
      if (value !== 'X' && place[y][x - 2] === 'P') {
        return false;
      }
    }
  }
  return true;
};

const checkDiagonal = (place, x, y) => {
  const xMove = [-1, 1];
  const yMove = [-1, 1];

  for (let i of yMove) {
    for (let j of xMove) {
      if (
        y + i >= 0 &&
        y + i < place.length &&
        x + j >= 0 &&
        x + j < place[0].length &&
        place[y + i][x + j] === 'P'
      ) {
        if (place[y][x + j] !== 'X' || place[y + i][x] !== 'X') return false;
      }
    }
  }

  return true;
};

const getSol = (place, x, y) => {
  return (
    checkUpward(place, x, y) &&
    checkDownward(place, x, y) &&
    checkRightward(place, x, y) &&
    checkLeftward(place, x, y) &&
    checkDiagonal(place, x, y)
  );
};

function solution(places) {
  var answer = [];

  places.forEach(place => {
    for (let i = 0; i < place.length; i++) {
      for (let j = 0; j < place[0].length; j++) {
        const value = place[i][j];
        if (value === 'P') {
          if (!getSol(place, j, i)) {
            answer.push(0);
            return;
          }
        }
      }
    }
    answer.push(1);
  });

  return answer;
}

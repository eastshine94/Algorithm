function getPoint(l1, l2) {
  const [A, B, E] = l1;
  const [C, D, F] = l2;

  const deno = A * D - B * C;
  if (deno === 0) {
    return false;
  }

  const x = (B * F - E * D) / deno;
  const y = (E * C - A * F) / deno;

  if (String(x).includes('.') || String(y).includes('.')) {
    return false;
  }

  return [x, y];
}

function solution(line) {
  const points = [];

  let [minX, minY, maxX, maxY] = [
    Number.MAX_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER
  ];

  for (let i = 0; i < line.length; i++) {
    const l1 = line[i];
    for (let j = i + 1; j < line.length; j++) {
      const l2 = line[j];
      const point = getPoint(l1, l2);
      if (typeof point !== 'boolean') {
        points.push(point);
        minX = Math.min(minX, point[0]);
        maxX = Math.max(maxX, point[0]);
        minY = Math.min(minY, point[1]);
        maxY = Math.max(maxY, point[1]);
      }
    }
  }

  const arr = Array.from(new Array(maxY - minY + 1), () =>
    new Array(maxX - minX + 1).fill('.')
  );

  points.forEach(point => {
    const x = point[0] - minX;
    const y = point[1] - minY;
    arr[y][x] = '*';
  });

  return arr.map(val => val.join('')).reverse();
}

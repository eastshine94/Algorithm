function solution(numbers) {
  const findSol = num => {
    const bi = num.toString(2);

    if (num < 2 || num % 2 === 0) {
      return num + 1;
    } else {
      let idx = 0;
      const arr = bi.split('');
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === '0') {
          idx = i + 1;
          break;
        }
      }
      const changed = `${
        idx > 0 ? bi.substring(0, idx - 1) : ''
      }10${bi.substring(idx + 1)}`;

      return parseInt(changed, 2);
    }
  };

  return numbers.map(num => findSol(num));
}

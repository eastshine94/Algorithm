function solution(s, n) {
  const aLowerCode = 'a'.charCodeAt();
  const zLowerCode = 'z'.charCodeAt();
  const aUpperCode = 'A'.charCodeAt();
  const zUpperCode = 'Z'.charCodeAt();

  return [...s]
    .map(c => {
      if (c === ' ') return c;
      const code = c.charCodeAt();

      if (zUpperCode < code) {
        const result =
          aLowerCode +
          ((code - aLowerCode + n) % (zLowerCode - aLowerCode + 1));
        return String.fromCharCode(result);
      } else {
        const result =
          aUpperCode +
          ((code - aUpperCode + n) % (zUpperCode - aUpperCode + 1));
        return String.fromCharCode(result);
      }
    })
    .join('');
}

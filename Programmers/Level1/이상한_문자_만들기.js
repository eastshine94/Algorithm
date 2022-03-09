function solution(s) {
  return s
    .split(' ')
    .map(word =>
      [...word.toUpperCase()]
        .map((c, idx) => (idx % 2 !== 0 ? c.toLowerCase() : c))
        .join('')
    )
    .join(' ');
}

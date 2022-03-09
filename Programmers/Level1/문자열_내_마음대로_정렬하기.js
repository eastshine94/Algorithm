function solution(strings, n) {
  return strings.sort((a, b) => {
    const compare = a[n].localeCompare(b[n]);
    return compare === 0 ? a.localeCompare(b) : compare;
  });
}

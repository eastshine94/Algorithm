function solution(sizes) {
  let max = 0;
  const minLenList = [];

  sizes.forEach(([len1, len2]) => {
    max = Math.max(max, len1, len2);
    minLenList.push(Math.min(len1, len2));
  });

  return max * Math.max(...minLenList);
}

function solution(elements) {
  const sum_case = new Set();
  for (let i = 0; i < elements.length; i++) {
    sum_case.add(elements[i]);

    let sum = elements[i];
    for (let j = i - 1; j >= 0; j--) {
      sum += elements[j];
      sum_case.add(sum);
    }
    for (let j = elements.length - 1; j > i; j--) {
      sum += elements[j];
      sum_case.add(sum);
    }
  }

  return sum_case.size;
}

function solution(my_string, overwrite_string, s) {
  const len = overwrite_string.length;
  var answer =
    my_string.substr(0, s) + overwrite_string + my_string.substr(s + len);

  return answer;
}

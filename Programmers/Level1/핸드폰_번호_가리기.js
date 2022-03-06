function solution(phone_number) {
  const LENGTH = phone_number.length;
  return phone_number.substring(LENGTH - 4, LENGTH).padStart(LENGTH, '*');
}

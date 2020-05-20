/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let answer = Number(String(Math.abs(x)).split('').reverse().join(''));
    let sign = x>0 ? 1:-1;
    let max = Math.pow(2,31);
    return answer >= max ? 0 : sign * answer;
};


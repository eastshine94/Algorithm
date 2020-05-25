/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let answer = divisor*dividend>0 ? Math.floor(dividend/divisor) :Math.ceil(dividend/divisor);
    return answer >= Math.pow(2,31) ? Math.pow(2,31)-1 :  (-Math.pow(2,31)>answer  ? -Math.pow(2,31): answer );
};
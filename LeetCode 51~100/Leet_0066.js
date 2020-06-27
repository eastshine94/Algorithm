/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let idx = digits.length - 1;
    while(true){
        digits[idx] === 9 ? digits[idx] = 0 : digits[idx]++;
        if(digits[idx] != 0) break;
        if(idx === 0){
            digits.unshift(1);
            break;
        }
        idx--;
    }
    return digits;
};
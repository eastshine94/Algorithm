/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const LEN = Math.max(a.length, b.length);
    a = a.padStart(LEN, '0');
    b = b.padStart(LEN, '0');
    let idx = LEN - 1;
    let sum = 0;
    let result = "";
    while(idx >= 0){
        let numA = parseInt(a.charAt(idx));
        let numB = parseInt(b.charAt(idx));
        let currSum = numA + numB + sum;
        if(currSum >= 2){
            sum = 1;
            result = currSum === 3 ?  '1' + result : '0' + result;
        }
        else{
            sum = 0;
            result = currSum === 1 ?  '1' + result : '0' + result;
        }
        idx--;
    }
    return sum === 1 ?  '1' + result : result;
};
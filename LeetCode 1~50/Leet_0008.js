/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim();
    let first = str.split(' ')[0];
    let firstChar = first.charAt(0);

    if (firstChar === '+' || firstChar === '-' || Number.isInteger(Number(firstChar))) {
        let answer = firstChar;
        let i;
        for (i = 1; i<first.length; i++) {
            let c = Number(first.charAt(i));
            console.log(c , Number.isInteger(c));
            if (Number.isInteger(c)) break;
            answer += c;
        }
        
        answer = Number(answer);
        let max = Math.pow(2, 31) - 1;
        let min = -Math.pow(2, 31);

        if (answer > 0 && answer > max) {
            return max;
        }
        else if (answer < 0 && answer < min) {
            return min;
        }
        else {
            return answer ? answer : 0 ;
        }
    }
    return 0;
};
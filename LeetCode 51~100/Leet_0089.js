/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const answer = [0];
    let count = 0;
    while(count < n){
        const len = answer.length;
        const plus = Math.pow(2, count);
        for(let i=len - 1; i>=0; i--){
            answer.push(answer[i] + plus);
        }
        count++;
    }
    return answer;
};
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    answer = [];
    getAnswer(0,0,n,"");
    return answer;
};

const getAnswer = (openCount, closeCount, n, result) => {
    if(openCount === n){
        result += ")".repeat(openCount - closeCount);
        answer.push(result);
        return;
    }
    if(openCount < closeCount) return;
    getAnswer(openCount+1, closeCount, n, result +"(");
    getAnswer(openCount, closeCount+1, n, result +")");
};
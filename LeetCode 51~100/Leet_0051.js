/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const answer = [];
    const queens = [];
    getAnswer(queens, answer, 0, n);
    return answer;
};


const getAnswer = (queens, answer, row, n) => {
    if(queens.length === n){
        let result = queens.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n-col-1));
        answer.push(result);
        return;
    }
    for(let col=0; col<n; col++){
        if(isValid(queens, row, col)){
           
            queens.push(col);
            getAnswer(queens, answer, row+1, n);
            queens.pop();
        }
    }
};

const isValid = (queens, row, col) => {
    //col
    for(let i =0; i<queens.length; i++){
        if(queens[i] === col){
            return false;
        }
    }
    //diagonal
    for(let i = 0; i<queens.length; i++){
        let rowN = Math.abs(row - i);
        let colN = Math.abs(col - queens[i]);
        if(rowN === colN){
            return false;
        }
    }
    return true;
}
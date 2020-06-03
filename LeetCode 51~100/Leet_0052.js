/**
 * @param {number} n
 * @return {number}
 */
let answer;
var totalNQueens = function(n) {
    answer = 0;
    const queens = [];
    getAnswer(queens, 0, n);
    return answer;
};


const getAnswer = (queens, row, n) => {
    if(queens.length === n){
        answer++;
        return;
    }
    for(let col=0; col<n; col++){
        if(isValid(queens, row, col)){
           
            queens.push(col);
            getAnswer(queens, row+1, n);
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
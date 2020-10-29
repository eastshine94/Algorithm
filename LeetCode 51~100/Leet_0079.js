/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

let answer = false;
let check; 
const y = [1,0,-1,0];
const x = [0,1,0,-1];
var exist = function(board, word) {
    answer = false;
    
    for(let i = 0; i<board.length; i++){
        for(j = 0; j<board[0].length; j++){
            if(word.charAt(0) === board[i][j]){
                check = Array.from(Array(board.length), () => new Array(board[0].length).fill(false));
                check[i][j] = true;
                isValid(i, j, board, word, 1);
                if(answer) return true;
            }
        }
    }
    return false;
};

const isValid = (i,j, board, word, idx) => {
    if(answer) return;
    if(word.length === idx) {
        answer = true;
        return;
    }
    for(let k = 0; k<4; k++){
        const moveY = i + y[k];
        const moveX = j + x[k];
        if(moveY >= 0 &&moveY < board.length && moveX < board[0].length && moveX >= 0 && !check[moveY][moveX]){
            if(board[moveY][moveX] === word.charAt(idx)){
                check[moveY][moveX] = true;
                isValid(moveY, moveX, board, word, idx + 1);
                check[moveY][moveX] = false;
            }
        }
    }
}
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const SIZE = 9;
let isfindAnswer;
var solveSudoku = function (board) {
    isfindAnswer = false;
    getAnswer(board,0,0);
};

const getAnswer = (board, row, col) => {
    
    if(row === SIZE) {
        isfindAnswer = true;
        return;
    }
    const currVal = board[row][col];
    if(currVal !== ".") {
        if(col+1<SIZE){
            getAnswer(board,row, col+1);
        }
        else{
            getAnswer(board, row+1, 0);
        }
    }
    else{
        for(let i=1; i<=SIZE; i++){
            const numberToString = String(i);
            if(isValidVal(board, row, col, numberToString)){
                board[row][col] = numberToString;
                if(col+1<SIZE){
                    getAnswer(board, row, col+1);
                }
                else{
                    getAnswer(board, row+1, 0);
                }
                if(isfindAnswer) return;
                board[row][col] = ".";
            }
        }
        return;
    }
    
};

const isValidVal = (board, row, col, val) => {
    if (!isValidValForRow(board, row, val)) return false;
    if (!isValidValForCol(board, col, val)) return false;
    if (!isValidValForBox(board, row, col, val)) return false;
    return true;
};

const isValidValForRow = (board, row, val) => {
    let i;
    for (i = 0; i < SIZE; i++) {
        const rowVal = board[row][i];
        if(rowVal === ".") continue;
        if (val === rowVal) return false;
    }

    return true;
};
const isValidValForCol = (board, col, val) => {
    let i;
    for (i = 0; i < SIZE; i++) {
        const colVal = board[i][col];
        if(colVal === ".") continue;
        if (val === colVal) return false;
    }
    return true;
};
const isValidValForBox = (board, row, col, val) => {
    let i, j;
    let initRow = Math.floor(row / 3) * 3;
    let initCol = Math.floor(col / 3) * 3;
    for (i = initRow; i < initRow + 3; i++) {
        for (j = initCol; j < initCol + 3; j++) {
            const boxVal = board[i][j];
            if(boxVal === ".") continue;
            if (val === boxVal) return false;
        }
    }
    return true;
};

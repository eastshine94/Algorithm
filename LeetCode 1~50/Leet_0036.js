/**
 * @param {character[][]} board
 * @return {boolean}
 */

const SIZE = 9;
var isValidSudoku = function(board) {
    let i,j;
    let set = new Set();
    for(i=0; i<SIZE; i++){
        for(j=0; j<SIZE; j++){
            let val = board[i][j];
            if(val ==='.') continue;
            let row = i;
            let col = j;
            let boxRow = Math.floor(row/3);
            let boxCol = Math.floor(col/3);

            let setRow = `row:${row}, val:${val}`;
            let setCol = `col:${col}, val:${val}`;
            let setBox = `row:${boxRow}, col:${boxCol}, val:${val}`;

            if(set.has(setRow) || set.has(setCol) || set.has(setBox)) return false;
            set.add(setRow);
            set.add(setCol);
            set.add(setBox);
        }
    }    
    return true;
};


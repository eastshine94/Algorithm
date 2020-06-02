/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const LEN = matrix.length;
    let copy = matrix.map(val => [...val]);
    let col = LEN-1;
    copy.forEach(row => {
        for(let i=0; i<LEN; i++){
            matrix[i][col] = row[i];
        }
        col--;
    });
};
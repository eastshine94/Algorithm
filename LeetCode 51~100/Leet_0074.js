/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    if(m === 0) return false;
    const n = matrix[0].length;
    let selectedRow = -1;
    for(let i= m-1; i>=0; i--){
        const value = matrix[i][0];
        if(target === value) return true;
        if(target > value) {
            selectedRow = i;
            break;
        }
    }
    if(selectedRow < 0) return false;
    for(let i=1; i<n; i++){
        if(target === matrix[selectedRow][i]) return true;
    }
    return false; 
};

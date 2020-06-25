/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const arr = [];
    let i,j;
    for(i=0; i<m; i++){
        for(j=0; j<n; j++){
            if(i === 0){
                j === 0 ? arr.push([grid[i][j]]) : arr[i].push(arr[i][j-1] + grid[i][j]);
            }
            else{
                j === 0 ? arr.push([arr[i-1][j] + grid[i][j]]) : arr[i].push(Math.min(arr[i][j-1], arr[i-1][j]) + grid[i][j]);
            }
        }
    }
    return arr[m-1][n-1];
};
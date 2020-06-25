/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const arr = [];
    let i,j;
    for(i=0; i<m; i++){
        for(j=0; j<n; j++){
            if(obstacleGrid[i][j] === 1){
                j === 0 ? arr.push([0]) : arr[i].push(0);
            }
            else if(i === 0){
                j === 0 ? arr.push([1]) : arr[i].push(1);
                if(arr[i][j-1] === 0) arr[i][j] = 0;
            }
            else{
                j === 0 ? (arr[i-1][j] === 0 ? arr.push([0]): arr.push([1])) : arr[i].push(arr[i][j-1] + arr[i-1][j]);
            }
        }
    }
    return arr[m-1][n-1];
};
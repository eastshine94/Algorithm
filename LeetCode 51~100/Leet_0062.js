/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const arr = [];
    let i,j;
    for(i=0; i<m; i++){
        for(j=0; j<n; j++){
            if(i === 0){
                j === 0 ? arr.push([1]) : arr[i].push(1);
            }
            else{
                j === 0 ? arr.push([1]) : arr[i].push(arr[i][j-1] + arr[i-1][j]);
            }
        }
    }
    return arr[m-1][n-1];
};


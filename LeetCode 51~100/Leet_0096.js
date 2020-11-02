/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if(n === 0) return 0;
    const dp = [1,1,2];
    for(let i=3; i<=n; i++){
        dp[i] = 0;
        for(let j = 1; j<=i; j++){
            const left = i-j;
            const right = i - left -1;
            dp[i] += dp[left] * dp[right];
        }
    }
    return dp[n];
};
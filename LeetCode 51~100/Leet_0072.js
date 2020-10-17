/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;
    const dp = [];
    for(let i=0; i<=len1; i++){
        if(!dp[i]) dp[i] = [];
        dp[i][0] = i;
    }
    for(let i=0; i<=len2; i++){
        dp[0][i] = i;
    }

    for(let i=1; i<=len1; i++){
        for(let j=1; j<=len2; j++){
            const c1 = word1.charAt(i-1);
            const c2 = word2.charAt(j-1);
            if(c1 === c2){
                dp[i][j] = dp[i-1][j-1];
            }
            else{
                dp[i][j] = 1 + Math.min( dp [ i - 1 ] [ j - 1 ] , dp [ i  - 1 ] [ j ] , dp [  i ][ j - 1 ]);
            }
        }
    }
    return dp[len1][len2];
};
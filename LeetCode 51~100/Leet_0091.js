/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function(s) {
    const dp = [];
    dp[0] = 1;
    dp[1] = s.charAt(0) === '0' ? 0 : 1;
    for(let i=2; i<=s.length; i++){
        const oneDigit  = parseInt(s.charAt(i-1));
        const twoDigit = parseInt(s.slice(i-2, i));
        dp[i] = 0;
        if(oneDigit > 0){
            dp[i] += dp[i-1];
        }
        if(twoDigit>=10 && twoDigit<=26){
            dp[i] += dp[i-2];
        }
    }  
    
    return dp[s.length];
};


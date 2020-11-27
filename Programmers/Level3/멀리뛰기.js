function solution(n) {
    let dp = [1, 1, 2];
    if(n > 2){
        dp.concat(...new Array(n-2).fill(0));
        for(let i = 3; i<=n; i++){
            if(i%2 === 1){
                dp[i] = (dp[i-2] + dp[i-1])%1234567;
            }
            else {
                dp[i] = (dp[i-2]*2 + dp[i-3])%1234567;
            }
            
        }
    }
    
    var answer = dp[n];
    return answer;
}
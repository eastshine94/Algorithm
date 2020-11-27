function solution(n, money) {
    const LEN = money.length;
    const dp = [1, ...new Array(n+1).fill(0)];
    for(let i=0; i<LEN; i++){
        const m = money[i];
        for(let j=1; j<=n; j++){
            if(m <= j){
                dp[j] = (dp[j] + dp[j-m])%1000000007;
            }
        }
    }
    var answer = dp[n];
    return answer;
}
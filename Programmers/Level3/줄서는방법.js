function solution(n, k) {
    var answer = [];
    const check = new Array(n+1).fill(false);
    let count = 1;
    while(count <= n){
        const minus = getFac(n - count);
        for(let i = 1; i<=n; i++){
            if(check[i]) continue;
            if( k > minus) {
                k -= minus;
            }else{
                answer.push(i);
                check[i] = true;
                break;
            }
        }
        count++;
    }
    return answer;
}

const getFac = (n) => {
    if(n === 0) return 1;
    let sol = 1;
    for(let i=2; i<=n; i++){
        sol *= i;
    }
    return sol;
}
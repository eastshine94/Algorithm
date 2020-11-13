function solution(n) {
    const total = (n*(n+1))/2;
    let answer = new Array(total).fill(0);
    let value = 1;
    let k = 0;
    const N = n;
    while(n >= 1){
        let idx = 2*k*(k+1);
        let sub = 2*k + 1;
        if( n === 1){
            answer[idx] = value;
            break;
        }
        let cnt = n - 1;
        while(cnt > 0){
            answer[idx] = value++;
            idx += sub++;
            cnt--;
        }
        for(let i = 0; i < n; i++){
            answer[idx++] = value++;
        }

        idx--;
        let  nk = N - k;
        for(let i =0; i < n -2; i++){
            idx -= nk--;
            answer[idx] = value++;
        }
        n -= 3;
        k++;
    }
    return answer;
}
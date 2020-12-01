function solution(n, s) {
    if(n > s) return [-1];
    const bal = Math.floor(s/n);
    var answer = new Array(n).fill(bal);
    let plusN = s - bal*n;
    let idx= answer.length - 1;
    while(plusN > 0){
        answer[idx]++;
        idx--;
        plusN--;
    }
    return answer;
}
function solution(a) {
    var answer = 0;
    const leftMin = [];
    const rightMin = [];
    const LEN = a.length;
    for(let i= 0; i<LEN - 1; i++){
        if(leftMin.length === 0){
            const min = Math.min(a[i], a[i+1]);
            leftMin[i] = min;
        }
        else {
            const min = Math.min(leftMin[i-1],a[i+1]);
            leftMin[i] = min;
        }
    }
    for(let i= LEN - 1; i>0; i--){
        if(rightMin.length === 0){
            const min = Math.min(a[i], a[i-1]);
            rightMin[i-1] = min;
        }
        else {
            const min = Math.min(rightMin[i],a[i-1]);
            rightMin[i-1] = min;
        }
    }
    for(let i= 0; i<LEN; i++){
        if(i === 0 || i === LEN - 1){
            answer++;
        }
        else {
            const val = a[i];
            if(val <= leftMin[i-1] || val <= rightMin[i]){
                answer++;
            }
        }
    }
    return answer;
}
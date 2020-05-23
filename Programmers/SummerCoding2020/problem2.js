function solution(n) {
    
    let list = [1];
    let idx = 1;
    while(true) {
        let len = list.length;
        if(len>= n){
            break;
        }
        let init = Math.pow(3,idx);
        list.push(init);
        for(let i=0; i<len; i++){
            list.push(init + list[i]);
        }
        idx++;
    }
    var answer = list[n-1];
    return answer;
}
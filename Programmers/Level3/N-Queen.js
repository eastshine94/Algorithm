var answer;
function solution(n) {
    answer = 0;
    const check = new Array(n).fill(false);
    const pointer = [];
    dfs(pointer, check, 0, n);
    return answer;
}

const dfs = (pointer, check, row, n) => {
    if(row === n){
        answer++;
        return;
    }
    for(let i=0; i<n; i++){
        if(!check[i]){
            const point = [row, i];
            let flag  = true;
            for(let j=0; j<pointer.length; j++){
                const plus = row - j;
                const x = pointer[j][1];
                if((x + plus) === i  || (x - plus) === i){
                    flag = false;
                    break;
                }
                
            }
            if(flag){
                check[i] = true;
                pointer.push(point);
                dfs(pointer, check, row + 1, n);
                check[i] = false;
                pointer.pop();
            }
        }
    }
}
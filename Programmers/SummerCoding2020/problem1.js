function solution(p)
{
    var answer = p+1;
    while(true){
        let numSplit = answer.toString().split("");
        let len = numSplit.length;
        let i, j, c1, c2;
        let flag = true;
        for(i = len-1; i>=0; i--){
            c1 = numSplit[i];
            for(j = i-1; j>=0; j--){
                c2 = numSplit[j];
                if(c1 === c2){
                    flag = false;
                    break;
                }
            }
            if(!flag) break;
        }
        if(flag) break;
        else answer += Math.pow(10,len - i - 1);
        
    }
    return answer;

}


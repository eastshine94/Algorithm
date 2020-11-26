function solution(s){
    var answer = 1;
    const LEN = s.length;
    for(let i=0; i<LEN; i++){
        const c1 = s.charAt(i);
        if(LEN - i <= answer) return answer;
        for(let j = LEN - 1; j>i; j--){
            const c2 = s.charAt(j);
            if(c1 === c2){
                const sub = s.substring(i,j+1);
                if(isPalindrome(sub)){
                    answer = Math.max(sub.length, answer);
                    break;
                }
            }
        }
    }
    return answer;
}

const isPalindrome = (s) => {
    const LEN = s.length;
    for(let i=0; i < Math.floor(LEN/2); i++){
        const c1 = s.charAt(i);
        const c2 = s.charAt(LEN - i - 1);
        if(c1 !== c2){
            return false;
        }
    }
    
    return true;
}
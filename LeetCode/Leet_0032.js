/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let left = 0;
    let right = 0; 
    let answer = 0;
    const LEN = s.length;
    
    for(let c of s ){
        if(c === "(") left++;
        if(c === ")") right++;
        if(left === right){
            answer = Math.max(answer , 2 * left);
        }
        
        if(right > left){
            left = 0 ; 
            right = 0;
        }
    }
    
    left = 0 ; 
    right = 0;
    
    for(let j = LEN -1 ; j >= 0 ; j--){
        if(s[j] === ")") right++;
        if(s[j] === "(") left++;
        if(left === right){
            answer = Math.max(answer , 2 * left);
        }
        
        if(left > right){
            left = 0 ; 
            right = 0;
        }
    }
    
    return answer;
};
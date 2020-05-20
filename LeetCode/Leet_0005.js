/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let answer = "";
    let i,j;
    for(i = 0; i<s.length; i++){
        let str = "";
        if(s.length - i <= answer.length){
            return answer;
        }
        for(j=i; j<s.length; j++){
            str += s.charAt(j);
            if(isPalindrome(str)){
                if(str.length > answer.length){
                    answer = str;
                }
            }
        }
    }
    return answer;

};

var isPalindrome = (s) => {
    let len = Math.floor(s.length/2);
    let lastIdx = s.length - 1;
    let i;
    for(i = 0; i<len; i++){
        let c1 = s.charAt(i);
        let c2 = s.charAt(lastIdx);
        if(c1 !== c2) return false;
        lastIdx--;
    }
    return true;
}
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    x = x.toString();
    let i;
    let len = Math.floor(x.length/2);
    let lastIdx = x.length - 1;
    for(i=0; i<len; i++){
        let c1 = x.charAt(i);
        let c2 = x.charAt(lastIdx--);
        if(c1 !== c2){
            return false;
        }
    }
    return true;
};

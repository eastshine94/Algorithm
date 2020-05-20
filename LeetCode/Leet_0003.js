/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let answer = 0;
    let set = new Set();
    let max_len = s.length;
    let i=0, j=0;
    while(i<max_len && j<max_len){
        const c = s.charAt(j);
        if(!set.has(c)){
            set.add(s.charAt(j++));
            answer = Math.max(answer, j-i);
        }
        else{
            set.delete(s.charAt(i++));
        }
    }
    return answer;
};
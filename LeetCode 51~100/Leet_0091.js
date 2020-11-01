/**
 * @param {string} s
 * @return {number}
 */
let answer;
var numDecodings = function(s) {
    answer = 0;
    getAnswer(s, 0);
    return answer;
};

const getAnswer = (s, idx) => {
    if(s.length <= idx){
        answer++;
        return;
    }
    if(s.charAt(idx) === "0"){
        return;
    }
    getAnswer(s, idx+1);
    
    if(s.length-2 >= idx ){
        const substr = s.substr(idx, 2);
        if(substr <= "26"){
            getAnswer(s, idx+2);
        }
    }
}
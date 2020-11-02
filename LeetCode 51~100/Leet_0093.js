/**
 * @param {string} s
 * @return {string[]}
 */
let answer;
var restoreIpAddresses = function(s) {
    answer = [];
    if(s.length > 12) return answer;
    
    dfs(s, 0, 1, "");
    return answer;
};

const dfs = (s, idx, count, save) => {
    if(count > 4){
        if(idx == s.length){
            answer.push(save);
        }
        return;
    }
    const oneDigit = parseInt(s.substr(idx, 1));
    dfs(s, idx+1, count+1, count === 1 ? `${oneDigit}`:`${save}.${oneDigit}`);
    if(idx+1 < s.length){
        const twoDigit = parseInt(s.substr(idx, 2));
        if(twoDigit >= 10){
            dfs(s, idx+2, count+1, count === 1 ? `${twoDigit}`:`${save}.${twoDigit}`);
        }
    }
    if(idx+2 <s.length ){
        const threeDigit = parseInt(s.substr(idx, 3));
        if(threeDigit >= 100 && threeDigit <= 255){
            dfs(s, idx+3, count+1, count === 1 ? `${threeDigit}`:`${save}.${threeDigit}`);
        }
    }
}
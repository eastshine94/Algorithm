/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

var findSubstring = function (s, words) {
    const answer = [];
    if (words.length === 0 || s.length === 0) return answer;
    const map = {};
    for (let word of words){
        map[word] = !map[word] ? 1 : map[word] + 1;
    } 
    const wordNum = words.length;
    const wordLen = words[0].length;
    
    for (let i = 0; i < s.length - wordNum * wordLen + 1; i++){
        if (isSubstring({...map}, s, wordNum, wordLen, i)) 
            answer.push(i);
    } 
    return answer;
};

const isSubstring = (map, s, wordNum, wordLen, i) => {
    if (wordNum === 0) return true;
    const sub = s.substr(i, wordLen);
    if (!map[sub]) return false;
    map[sub]--;
    return isSubstring(map, s, wordNum - 1, wordLen, i + wordLen);
};



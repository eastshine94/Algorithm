/**
 * @param {string} digits
 * @return {string[]}
 */
const ALPHA = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

var letterCombinations = function (digits) {
    let nums = digits.split("");
    if (!digits || digits.match("0") || digits.match("1")) {
        return [];
    }
    let answer = ALPHA[Number(nums[0])].split("");

    bfs(nums, answer, 1);
    return answer;
};

const bfs = (nums, answer, idx) => {
    if(idx === nums.length){
        return;
    }
    
    const len = answer.length;
    const add = ALPHA[Number(nums[idx])].split("");
   
    for(let i=0; i<len; i++){
        let str = answer.shift();
        for(let j=0; j<add.length; j++){
            answer.push(str + add[j]);
        }
    }
    bfs(nums, answer, idx+1);
};
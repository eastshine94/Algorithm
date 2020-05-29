/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

let answer;
var combinationSum = function(candidates, target) {
    answer = [];
    candidates = candidates.sort((a,b) => a-b);
    getAnswer(candidates, 0, target, [], 0);
    
    return answer;
};

const getAnswer = (candidates, idx, target, arr, sum) => {
    for(let i = idx; i<candidates.length; i++){
        const val = candidates[i];
        if(sum + val > target) {
            return;
        }
        else if(sum + val === target){
            answer.push([...arr, val]);
            return;
        }
        getAnswer(candidates, i, target, [...arr, val], sum + val);
    }
};


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let answer;
var combinationSum2 = function(candidates, target) {
    answer = [];
    candidates = candidates.sort((a,b) => a-b);
    let map = {};
    let keys = new Set();
    for(val of candidates){
        map[val] = map[val] ? map[val] + 1 : 1;
        keys.add(val);
    }
    keys = [...keys.keys()];
    getAnswer(map,keys, 0,  target, [], 0);
    
    return answer;
};

const getAnswer = (map, keys, idx, target, arr, sum) => {
    
    for(let i = idx; i<keys.length; i++){
        const val = keys[i];
        const count = map[val];
        if(count === 0){
            getAnswer(map, keys, i+1, target, arr, sum);
            return;
        } 
        if(sum + val > target) {
            return;
        }
        else if(sum + val === target){
            answer.push([...arr, val]);
            return;
        }
        map[val]--;
        getAnswer(map, keys, i, target, [...arr, val], sum + val);
        map[val]++;
    }
};
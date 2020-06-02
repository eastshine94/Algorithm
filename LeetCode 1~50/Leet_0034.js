/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const answer = nums.reduce((acc, curr,idx)=> {
        if(curr === target){
            return [...acc, idx];
        }
        return acc;
    },[]);
    return answer.length === 0 ?  [-1,-1]: [answer[0],answer[answer.length-1]];
};
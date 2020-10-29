/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let answer;
var subsets = function(nums) {
    answer = [[]];
    for(let i=1; i<=nums.length; i++){
        getCombine(i, nums, 0, []);
    }
    return answer;
};

const getCombine = (n, nums, idx, arr) => {
    if(arr.length === n){
        answer.push(arr);
        return;
    }
    for(let i = idx; i<nums.length; i++){
        getCombine(n, nums, i + 1, [...arr, nums[i]]);
    }
}
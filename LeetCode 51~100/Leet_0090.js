/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let answer;
var subsetsWithDup = function(nums) {
    answer = [[]];
    nums.sort((a,b) => a-b);
    getSubset(nums, 0, []);
    return answer;
};

const getSubset = (nums, idx, arr) => {
    if(nums.length <= idx) return;
    const list = [...arr];
    for(let i = idx; i<nums.length; i++){
        list.push(nums[i]);
        answer.push([...list]);
        getSubset(nums, i+1, [...list]);
        while(true){
            if(i === nums.length-1) break;
            if(nums[i] !== nums[i+1]) break; 
            i++;
        }
        list.pop();
    }
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const LEN = nums.length;
    for(let i=0; i<LEN; i++){
        if(target <=nums[i]){
            return i;
        }
    }
    return LEN;
};
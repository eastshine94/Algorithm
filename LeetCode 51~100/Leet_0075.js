/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const len = nums.length;
    for(let i= 0; i<len; i++){
        for(let j = 0; j<len-1-i; j++){
            if(nums[j] > nums[j+1]){
                const v = nums[j+1];
                nums[j+1] = nums[j];
                nums[j] = v;
            }
        }
    }
    return nums;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    for(let num of nums){
        sum += num;
        if(sum <= 0){
            max = Math.max(num, max);
            sum = 0;
        }
        else{
            max = Math.max(sum, max);
        }
    }
    return max;
};
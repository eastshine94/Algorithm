/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    const len = nums.length;
    if(nums[0] <= target){
        let currVal = nums[0];
        if(target === currVal) return true;
        for(let i=1; i< len; i++){
            const value = nums[i];
            if(target === value) return true;
            if(value < currVal || target < value) return false;
            currVal = value; 
        }
    }
    else if(nums[len - 1] >= target){
        let currVal = nums[len - 1];
        if(target === currVal) return true;
        for(let i = len - 1; i>= 0; i--){
            const value = nums[i];
            if(target === value) return true;
            if(value > currVal || target > value) return false;
            currVal = value; 
        }
    }
    return false;
};
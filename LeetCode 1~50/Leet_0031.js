/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length-1;
    if(len <0) return;

    let save = [nums[len]];
    getNextPermutation(save,nums, len-1);
    
};

var getNextPermutation = (save, nums, idx) => {
    if(idx < 0) {
        nums = nums.sort((a,b) => a-b);
        return;
    }
    let currVal = nums[idx];
    let findBigOne = save.findIndex(val => val > currVal);
    if(findBigOne < 0){
        save.push(currVal);
        getNextPermutation(save, nums, idx-1);
    }
    else{
        nums[idx] = save[findBigOne];
        save.splice(findBigOne,1);
        save.push(currVal);
        save = save.sort((a,b) => a-b);
        let j = 0;
        for(let i = idx+1; i<nums.length; i++){
            nums[i] = save[j];
            j++;
        }
    }
    return;
};

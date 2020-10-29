/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return nums;
    let currChar = nums[0];
    let count = 1;

    for(let i = 1; i < nums.length; i++){
        const c = nums[i];
        if(c === currChar){
            count++;
        }
        else {
            if(count >  2){
                nums.splice(i - count, count-2);
                i = i - (count - 2);
            }
            currChar = c;
            count = 1;
        }
    }
    if( count > 2){
        nums.splice(nums.length - count, count-2);
    }
};
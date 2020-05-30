/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const set = new Set();
    for(let num of nums){
        if(num>0) set.add(num);
    }
    for(let i=1; i<Number.MAX_SAFE_INTEGER; i++){
        if(!set.has(i)) return i;
    }
};
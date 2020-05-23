/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */


var fourSum = function(nums, target) {
    let answer = [];
    nums = nums.sort((a,b) => a-b);
    let i, j, k, num1, num2, num3, num4;
    for(i=0; i<nums.length - 3; i++){
        if(nums[i] === nums[i-1]) continue;
        num1 = nums[i];
        for(j=i+1; j<nums.length - 2; j++){
            if(j>i+1 && nums[j] === nums[j-1]) continue;
            num2 = nums[j];
            for(k=j+1; k<nums.length - 1; k++){
                if(k>j+1 && nums[k] === nums[k-1]) continue;
                num3 = nums[k];
                num4 = target - (num1+num2+num3);
                if(nums.indexOf(num4,k+1) > 0){
                    answer.push([num1,num2,num3,num4]);
                }
            }
        }
    }
    return answer;
};


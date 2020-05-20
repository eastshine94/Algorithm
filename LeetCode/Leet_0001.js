var twoSum = function(nums, target) {
    var i,j;
    for(i=0; i<nums.length; i++){
        for(j=i+1; j<nums.length; j++){
            var val1 = Number(nums[i]);
            var val2 = Number(nums[j]);
            var sum = val1 + val2;
            if(sum === target){
                return [i,j];
            }

        }
    }
    return [];
};
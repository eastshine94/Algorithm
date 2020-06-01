/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
    let answer = [];
    let list = [];
    let check = Array(nums.length).fill(false);
    getAnswer(nums, list, check, answer);
    return answer;
};

const getAnswer = (nums, list, check, answer) => {
    let LEN = nums.length;
    if(list.length === LEN){
        answer.push([...list]);
        return;
    }
    let i;
    for(i = 0; i<LEN; i++){
        if(!check[i]){
            check[i] = true;
            list.push(nums[i]);
            getAnswer(nums, list, check, answer);
            list.pop();
            check[i] = false;
        }
    }
};

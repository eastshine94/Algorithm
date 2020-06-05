/**
 * @param {number[]} nums
 * @return {boolean}
 */

let answer;
var canJump = function(nums) {
    if(nums.length <= 1) return true;
    
    let list = [];
    let check = Array(nums.length).fill(false);
    getAnswer(nums, list, check);
    return answer;
};
const getAnswer = (nums, list, check) => {
    const LEN = nums.length - 1;
    
    if(list.length === 0){
        let val =nums[0];
        if(nums[0] === LEN){
            answer = true;
            return;
        }
        check[0] = true;
        list.push({"val": val, "idx": 0});
    }
    else{
        const listLen = list.length;
        for(let i=0; i<listLen; i++){
            const select = list.shift();
            let val = select.val;
            let idx = select.idx;
            for(let j=idx+1; j<=val+idx; j++){
                if(j === LEN){
                    answer =true;
                    return;
                }
                if(!check[j]){
                    check[j] = true;
                    let curr = nums[j];
                    if(curr + j <= val + idx) continue;
                    if(curr + j === LEN){
                        answer = true;
                        return;
                    }

                    list.push({"val": curr, "idx": j});
                }
                
            }
        }    
    }

    if(list.length === 0){
        answer = false;
        return;
    }
    getAnswer(nums, list,check);
};

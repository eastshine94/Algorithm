/**
 * @param {number[]} nums
 * @return {number}
 */

let answer;
var jump = function (nums) {
    if(nums.length <= 1) return 0;
    
    answer = Number.MAX_VALUE;
    let list = [];
    let check = Array(nums.length).fill(false);
    getAnswer(nums, list, check, 0);
    return answer;
};

const getAnswer = (nums, list, check, jumpCount) => {
    const LEN = nums.length - 1;
    if(list.length === 0){
        let val =nums[0]; 
        if(nums[0] >= LEN){
            answer = jumpCount+1;
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
                
                if(!check[j]){
                    check[j] = true;
                    let curr = nums[j];
                    if(curr + j <= val + idx) continue;
                    if(curr + j >= LEN){
                        answer = jumpCount + 1;
                        return;
                    }
                    
                    list.push({"val": curr, "idx": j});
                }
                
            }
        }    
    }
    getAnswer(nums, list, check, jumpCount+1);
};

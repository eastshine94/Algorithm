/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    const answer = [];
    const map = new Map();

    nums = nums.sort((a,b)=>a-b);
    nums.forEach(val => {
        if(!map.has(val)){
            map.set(val, 1);
        }
        else{
            map.set(val, map.get(val) + 1);
        }
    });
    const set = [...map.keys()];
    for(let i=0; i<set.length; i++){
        let num1 = set[i];
        let sum;
        if(num1 === 0 && map.get(num1) >= 3){
            answer.push([0,0,0]);
        }
        else if( num1 !== 0 && map.get(num1) >= 2){
            sum = num1*2;
            if(map.has(-sum)){
                answer.push([num1, num1, -sum]);
            }   
        }
        
        for(let j = i+1; j<set.length-1; j++){
            let num2 = set[j];
            sum = num1 + num2;
            if(-sum > num2 && map.has(-sum)){
                answer.push([num1, num2, -sum]);
            }   
        }
    }
    return answer;
};

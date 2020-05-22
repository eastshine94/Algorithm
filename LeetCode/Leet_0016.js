/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var threeSumClosest = function(nums, target) {
    
    const map = new Map();
    let answer = 0;
    let min_gap = Number.MAX_VALUE;

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
        let gap;
        if(map.get(num1) >= 3){
            sum = num1 * 3;
            gap = Math.abs(sum - target);
            if(min_gap > gap){
                min_gap = gap;
                answer = sum;
            }
        }
        if( map.get(num1) >= 2){
            for(let j = 0; j<set.length; j++){
                if(i == j) continue;
                let num2 = set[j];
                sum = num1*2 + num2;
                gap = Math.abs(sum - target);
                if(min_gap > gap){
                    min_gap = gap;
                    answer = sum;
                }
            }
        }
        
        for(let j = i+1; j<set.length-1; j++){
            let num2 = set[j];
            for(let k = j+1; k<set.length; k++){
                let num3 = set[k];
                sum = num1 + num2 + num3;
                gap = Math.abs(sum - target);
                if(min_gap > gap){
                    min_gap = gap;
                    answer = sum;
                }
            }
        }
    }
    return answer;
};


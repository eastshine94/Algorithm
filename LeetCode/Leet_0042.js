/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const LEN = height.length;
    let i,j, answer = 0;
    let maxIdx;
    let flag = false;
    for(i = 0; i<LEN-1; i++){
        let count = 0;
        let val1 = height[i];
        flag = true;
        for(j = i+1; j<LEN; j++){
            let val2 = height[j];
            if(val1 <= val2){
                answer += count;
                i = j-1;
                flag = false;
                break;
            }
            count+= val1 - val2;
        }
        if(flag){
            maxIdx = i;
            break;
        }
    }
    if(flag){
        for(i = LEN-1; i>maxIdx; i--){
            let count = 0;
            let val1 = height[i];
            for(j = i-1; j>=maxIdx; j--){
                let val2 = height[j];
                if(val1 <= val2){
                    answer += count;
                    i = j+1;
                    break;
                }
                count+= val1 - val2;
            }
        }
    }
    
    return answer;
};
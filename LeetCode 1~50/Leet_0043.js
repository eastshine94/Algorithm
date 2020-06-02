/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 ==="0" || num2 === "0") return "0";
    
    
    const LEN1 = num1.length;
    const LEN2 = num2.length;
    let i, j;
    let answer = "";
    let cal = "";
    let count = 0;
    let addNum = 0;
    for(i = LEN1 - 1; i>=0; i--){
        let c1 = Number(num1.charAt(i));
        cal = "0".repeat(count);
        addNum = 0;
        for(j = LEN2 - 1; j>=0; j--){
            let c2 = Number(num2.charAt(j));
            let mul = c1 * c2 + addNum;
            cal = mul%10 + cal;
            addNum = Math.floor(mul/10);
        }
        if(addNum > 0) cal  = addNum + cal;
        answer = getSum(answer, cal);
        count++;
    }
 

    return answer;
};

const getSum  = (num1, num2) => {
    
    let add = 0;
    const arr1 = num1.split("");
    const arr2 = num2.split("");
    let answer = "";
    while(true){
        const LEN1 = arr1.length;
        const LEN2 = arr2.length; 
        if(LEN1 === 0 && LEN2 === 0) break;
        else{
            let val1 = LEN1 === 0 ? 0 : arr1.pop();
            let val2 = LEN2 === 0 ? 0 : arr2.pop();
            let result = Number(val1) + Number(val2) + Number(add);
            
            add = Math.floor(result/10);
            result = result%10;
            
            answer = result + answer;
        }
    }
    if(add > 0){
        answer = add + answer;
    }
    return answer;

};

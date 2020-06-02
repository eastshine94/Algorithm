/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let answer = '1';
    for(let i=2; i<=n; i++){
        let save = "";
        let count = 1;
        for(let j = 0; j<answer.length-1; j++){
            let c1 = answer.charAt(j);
            let c2 = answer.charAt(j+1);
            if(c1 === c2 ) count++;
            else{
                save += count + c1;
                count = 1;
            }
        }
        save += count + answer.charAt(answer.length - 1);
        answer = save;
    }
    return answer;
};
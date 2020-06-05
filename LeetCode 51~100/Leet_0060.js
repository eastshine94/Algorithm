/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    const fac = getFac(n);
    let check = Array(n).fill(false);
    let answer = "";
    let facIdx = n-1;
    while(answer.length<n){
        for(let i=0; i<n; i++){
            if(check[i]) continue;
            if( k<=fac[facIdx]){
                check[i] = true;
                answer+= (i+1);
                facIdx--;
                break;
            }
            else{
                k -= fac[facIdx];
            }
        }
    }
    
    return answer;
};

const getFac = (n) => {
    let result = [1];
    for(let i = 1; i<n; i++){
        result.push(result[i-1] * (i));
    }
    return result;
}
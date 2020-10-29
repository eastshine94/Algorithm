/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

let answer;
var combine = function(n, k) {
    answer = [];
    getCombine(n, k, 0, []);
    return answer;
};

const getCombine = (n, k,  idx, arr) => {
    if(arr.length === k){
        answer.push(arr);
        return;
    }
    for(let i = idx; i<n; i++){
        getCombine(n, k, i + 1, [...arr, i+1]);
    }
}
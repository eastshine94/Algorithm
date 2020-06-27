/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const list = [0, 1, 2];
    for(let i = 3; i<=n; i++){
        list.push(list[i-2] + list[i-1]);
    }
    return list[n];
};
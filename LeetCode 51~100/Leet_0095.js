/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
let answer;
var generateTrees = function(n) {
    answer = [];
    if(n === 0) return answer;
    const arr = [...Array(n).keys()].map(val => val + 1);
    getBST(arr, n, 1);
};

const getBST = (arr, n, count) => {
    if(count >  n){
        return null;
    }
}
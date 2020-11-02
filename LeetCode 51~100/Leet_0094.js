/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

let answer;
var inorderTraversal = function(root) {
    answer = [];
    if(!root) return answer;
    getAnswer(root);
    return answer;
};

const getAnswer = (node) => {
    const val = node.val;
    const left = node.left;
    const right = node.right;
    if(left){
        getAnswer(left);
        answer.push(val);
    }
    else{
        answer.push(val);
    }
    if(right){
        getAnswer(right);
    }
    return;
}
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const answer = [];
    const bfs = [root];
    while(bfs.length > 0){
        const arr = [];
        const len = bfs.length;
        for(let i= 0; i < len; i++){
            const node = bfs.shift();
            arr.push(node.val);
            if(node.left){
                bfs.push(node.left);
            }
            if(node.right){
                bfs.push(node.right);
            }
        }
        answer.push(arr);
    }
    return answer;
};
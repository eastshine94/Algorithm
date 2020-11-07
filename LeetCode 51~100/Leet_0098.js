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
 * @return {boolean}
 */
var isValidBST = function(root) {

    return searchBST(root, null, null);
};

const searchBST = (node, min, max) => {
    if(!node) return true;
    const val = node.val;
    if(min !== null && val <= min) return false;
    if(max !== null && val >= max) return false;

    if(!searchBST(node.right, val, max)) return false;
    if(!searchBST(node.left, min, val)) return false;
    return true;
}
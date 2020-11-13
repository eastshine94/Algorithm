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
var isSymmetric = function(root) {
    if(!root) return true;
    return compareNode(root.left, root.right);
};

const compareNode = (leftNode, rightNode) => {
    if(!leftNode && !rightNode) return true;
    if((!leftNode && rightNode) || (leftNode && !rightNode) ) return false;
    if(leftNode.val !== rightNode.val) return false;
    if(compareNode(leftNode.left, rightNode.right) && compareNode(leftNode.right, rightNode.left)) return true;
    return false;
}
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    var prev, first, second;
    
    function inorder(root) {
        if (!root) return;
        
        inorder(root.left);
        
        if (prev && prev.val > root.val) {

            if (!first) first = prev;
            second = root;
        }
        prev = root;
        
        inorder(root.right);
    }
    
    inorder(root);
    var temp = first.val;
    first.val = second.val;
    second.val = temp;
};
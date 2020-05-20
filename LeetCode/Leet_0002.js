/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let node = null;
    const carry = arguments[2];
    if(l1 === null && l2 === null ){
        if(carry) return new ListNode(1,null); 
        return null;
    }
    else{
        const val1 = l1 !== null ? l1.val : 0;
        const val2 = l2 !== null ? l2.val : 0;
        const sum = carry ? val1 + val2 + 1 : val1 + val2;        
        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null;
        node = new ListNode(sum%10);
        node.next = addTwoNumbers(l1,l2, sum>=10);
    }
    return node;
};

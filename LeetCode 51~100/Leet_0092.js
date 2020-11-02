/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let node = head;
    let idx = 1;
    let arr = [];
    const reverse  = [];
    
    while(node){
        const val = node.val;
        if(idx >= m && idx<=n){
            reverse.unshift(val);
            if(idx === n){
                arr = arr.concat(reverse);
            }
        }
        else {
            arr.push(val);
        }
        idx++;
        node = node.next;
    }
    return getListNode(arr, 0);
};


const getListNode = (arr, idx) => {
    if(arr.length === idx){
        return null;
    }
    const val = arr[idx];
    return new ListNode(val, getListNode(arr, idx+1));   
}
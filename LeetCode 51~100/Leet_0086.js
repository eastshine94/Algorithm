/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let curr = head;
    const before = [];
    const after = [];
    while(curr){
        const val = curr.val;
        if(val < x){
            before.push(val);
        }
        else{
            after.push(val);
        }
        curr = curr.next;
    }

    return getListNode(before.concat(after),0);
};

const getListNode = (arr, idx) => {
    if(arr.length === idx) return null;
    const val = arr[idx];
    return new ListNode(val, getListNode(arr, idx+1))
}
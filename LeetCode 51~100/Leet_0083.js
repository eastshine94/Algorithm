/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head; 
    let curr = head;
    let set = new Set();
    while(true){
        const val = curr.val; 
        set.add(val);
        curr = curr.next;
        if(!curr) break;
    }

    return getListNode([...set.values()], 0);   
};

const getListNode = (arr, idx) => {
    if(arr.length === idx) return null;
    const val = arr[idx];
    return new ListNode(val, getListNode(arr,idx+1));
}
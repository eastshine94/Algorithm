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
    let currVal = head.val;
    let count = 1; 
    let next = head.next;
    let arr = [];
    while(true){
        const val = next.val;
        if(val === currVal){
            count++;
        }
        else{
            if(count === 1){
                arr.push(currVal);
            }
            currVal = val;
            count = 1;
        }
        next = next.next;
        if(!next) {
            if(count === 1){
                arr.push(currVal);
            }
            break;
        }
    }

    return getListNode(arr, 0);
};

const getListNode = (arr, idx) => {
    if(arr.length === idx) return null;
    const val = arr[idx];
    return new ListNode(val, getListNode(arr,idx+1));
}
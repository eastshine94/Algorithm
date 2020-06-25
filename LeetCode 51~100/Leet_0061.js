/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    const list = [];
    while(true){
        if(!head){
            break;
        }
        list.push(head.val)
        head = head.next;
    }
    const LEN = list.length;
    const firstAreaIndex = k%LEN;
    const result = [];
    let i;
    for(i=LEN - firstAreaIndex; i<LEN; i++){
        result.push(list[i])
    }

    for(i=0; i<LEN - firstAreaIndex; i++) {
        result.push(list[i]);
    }
    return setListNode(result, 0);
};

const setListNode = (list, idx) => {
    if(list.length === idx){
        return null;
    }
    return new ListNode(list[idx], setListNode(list, idx+1));
}
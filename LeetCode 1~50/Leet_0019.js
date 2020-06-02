/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let arr = [];
    while(true){
        arr.push(head.val);
        head = head.next;
        if(head === null){
            break;
        }
    }
    arr = arr.slice(0, arr.length - n).concat(arr.slice(arr.length - n+1));
    if(arr.length === 0){
        return null;
    }
    let answer = getListNode(arr, 0);
    return answer;
    
};

var getListNode = (arr, idx) => {
    if(arr.length - 1 === idx){
        return new ListNode(arr[idx], null);
    }
    return new ListNode(arr[idx], getListNode(arr, idx+1));
}
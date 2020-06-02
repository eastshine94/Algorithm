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
var swapPairs = function(head) {
    let arr = [];

    while(true){
        if(head === null){
            break;
        }
        arr.push(head.val);
        head = head.next;
    }

    for(let i =0; i<arr.length-1; i+=2){
        let val = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = val;
    }
    
    let answer = getListNode(arr, 0);
    return answer;
};
var getListNode = (arr, idx) => {
    if(arr.length === idx){
        return null;
    }
    return new ListNode(arr[idx], getListNode(arr, idx+1));
}
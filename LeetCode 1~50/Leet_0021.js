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
var mergeTwoLists = function(l1, l2) {
    let arr1 = [];
    let arr2 = [];

    while(true){
        if(l1 === null){
            break;
        }
        arr1.push(l1.val);
        l1 = l1.next;
        
    }
    while(true){
        if(l2 === null){
            break;
        }
        arr2.push(l2.val);
        l2 = l2.next;
    }
    let arr = arr1.concat(arr2);

    arr = arr.sort((a,b) => a-b);
    let answer = getListNode(arr, 0);
    return answer;
};

var getListNode = (arr, idx) => {
    if(arr.length === idx){
        return null;
    }
    return new ListNode(arr[idx], getListNode(arr, idx+1));
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr = [];


    lists.forEach(val => {
        let list = val;
        while(true){
            if(list === null){
                break;
            }
            arr.push(list.val);
            list = list.next; 
        }
    });
  

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
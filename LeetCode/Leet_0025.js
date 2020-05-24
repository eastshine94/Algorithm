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
var reverseKGroup = function(head, k) {
    let arr = [];

    while(true){
        if(head === null){
            break;
        }
        arr.push(head.val);
        head = head.next;
    }

    for(let i =0; i<arr.length; i+=k){
        if(i+k-1 >= arr.length) break;
        let half = Math.floor((2*i+k)/2);
        let move = k+i-1;
        for(let j=i; j<half; j++){
            let val = arr[j];
            arr[j] = arr[move];
            arr[move] = val;
            move--;
        }
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
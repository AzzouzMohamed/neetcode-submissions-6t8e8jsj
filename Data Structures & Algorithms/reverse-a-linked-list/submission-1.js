/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */

    rev(curr, prev){
        console.log
        if(curr === null ) return prev;
        let tmp = curr.next; 
        curr.next = prev;
        prev = curr;
        curr = tmp;

       return  this.rev(curr, prev)
    }
    reverseList(head) {
        let l = this.rev(head, null);
        return l;
    }
}

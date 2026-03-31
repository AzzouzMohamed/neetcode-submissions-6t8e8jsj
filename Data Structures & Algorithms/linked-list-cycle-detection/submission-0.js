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
     * @return {boolean}
     */
    hasCycle(head) {
        let pointer = head;
        let s = new Set();
        while(pointer !== null){
            if(!s.has(pointer)){
                s.add(pointer)
            }else{
                return true;
            }

            pointer = pointer.next;
        }

        return false;
    }
}

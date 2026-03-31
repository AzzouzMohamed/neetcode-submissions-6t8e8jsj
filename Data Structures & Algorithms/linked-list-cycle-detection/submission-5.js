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

        let fast = head; 
        let slow = head;

        while(fast !== null && slow !== null ){
            if(fast.next !== null ){
                fast = fast.next;
            } else {
                return false;
            }

            if(slow.next !== null ){
                slow = slow.next 
                if(slow.next !== null ){
                    slow = slow.next;
                } else {
                    return false;
                }

            } else {
                return false;
            }
            


            if( fast === slow ){
                return true;
            }
        }

        return false;
             
    }
}

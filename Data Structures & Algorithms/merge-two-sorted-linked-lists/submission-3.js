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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(list1 === null && list2 === null) return null
        let pointer1 = list1;
        let newList = new ListNode();
        let head = newList;
        let pointer2 = list2;

        while(pointer1 !== null && pointer2 !== null){
            if(pointer1.val < pointer2.val ){
                newList.val = pointer1.val;
                pointer1 = pointer1.next;
            } else{
                newList.val = pointer2.val;
                pointer2 = pointer2.next;
            }

            newList.next = new ListNode()
            newList = newList.next;
        }

        if(pointer1){
            newList.val = pointer1.val;
            newList.next = pointer1.next;
        }

        if(pointer2){
            newList.val = pointer2.val;
            newList.next = pointer2.next;
        }

        return head;
    }
}

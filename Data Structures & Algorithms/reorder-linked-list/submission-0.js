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
     * @return {void}
     */
    reorderList(head) {
        // get to the middle

        let slow = head;
        let fast = head;

        while (fast.next && fast.next.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        // split them
        const sec = slow.next;
        slow.next = null;

        // rever the second half

        let curr = sec;
        let prev = null;
        console.log(sec);

        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        console.log(sec);

        // strick them ie merger
        let first=head
        let second=prev

        while(second){
            const f=first.next 
            const s=second.next

            first.next=second
            second.next=f 

            first=f
            second=s
        }
    }
}

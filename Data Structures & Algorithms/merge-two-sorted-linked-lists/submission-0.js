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

        let nHead=new ListNode()
        let p=nHead
        while(list1 && list2){
            if(list1.val<list2.val){
                nHead.next=list1
                list1=list1.next
            }else{
                nHead.next=list2
                list2=list2.next
            }
            nHead=nHead.next
        }
        while(list1){
            nHead.next=list1
            list1=list1.next
            nHead=nHead.next
        }
         while(list2){
            nHead.next=list2
            list2=list2.next
              nHead=nHead.next
        }

        return p.next
    }
}

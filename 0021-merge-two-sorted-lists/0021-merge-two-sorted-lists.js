/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const head = new ListNode(-1);
  let currNode = head;
  
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      currNode.next = list1;
      list1 = list1.next;
    } else {
      currNode.next = list2;
      list2 = list2.next;
    }
    
    currNode = currNode.next;
  }
  
  if (list1 === null) {
    currNode.next = list2;
  } else {
    currNode.next = list1;
  }
  
  return head.next;
};
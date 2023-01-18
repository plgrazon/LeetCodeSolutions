/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head;
  
  let prevNode = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return prevNode;
}

var reverseListLoop = function(head) {
  let currNode = head;
  let reversed = null;
  
  while (currNode) {
    let temp = currNode.next;
    currNode.next = reversed;
    reversed = currNode;
    currNode = temp;
  }
  
  return reversed;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var getIntersection = function(head) {
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      return slow;
    }
  }
  
  return null;
}

var detectCycle = function(head) {
  if (!head) return null;
  
  let intersection = getIntersection(head);
  let start = head;
  
  if (!intersection) return null;
  
  while (start !== intersection) {
    start = start.next;
    intersection = intersection.next;
  }
  
  return start;
}

var detectCycleLoop = function(head) {
  const visitedNodes = new Set();
  
  while (head) {
    if (!visitedNodes.has(head)) {
      visitedNodes.add(head);
    } else {
      return head;
    }
    
    head = head.next;
  }
  
  return null;
};
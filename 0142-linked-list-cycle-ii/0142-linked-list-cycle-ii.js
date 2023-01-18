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
  let intersection = getIntersection(head);
  
  if (!intersection) return null;
  
  let pt1 = head;
  let pt2 = intersection;
  
  while (pt1 !== pt2) {
    pt1 = pt1.next;
    pt2 = pt2.next;
  }
  
  return pt1;
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
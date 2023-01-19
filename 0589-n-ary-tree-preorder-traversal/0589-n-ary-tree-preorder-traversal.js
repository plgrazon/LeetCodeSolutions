/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  const stack = [root];
  const result = [];
  
  if (!root) return result;
  
  while (stack.length) {
    const currNode = stack.pop();
    console.log(currNode);
    result.push(currNode.val);
    
    for (let i = currNode.children.length - 1; i >= 0; i--) {
      stack.push(currNode.children[i]);
    }
  }
  
  return result;
};
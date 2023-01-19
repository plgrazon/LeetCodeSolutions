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
  const stack = [];
  const result = [];
  
  const dfs = root => {
    if (!root) return null;
    
    result.push(root.val);
    
    for (let i = 0; i < root.children.length; i++) {
      dfs(root.children[i]);
    }
  }
  
  dfs(root);
  
  return result;
}

var preorderLoop = function(root) {
  const stack = [root];
  const result = [];
  
  if (!root) return result;
  
  while (stack.length) {
    const currNode = stack.pop();
    result.push(currNode.val);
    
    for (let i = currNode.children.length - 1; i >= 0; i--) {
      stack.push(currNode.children[i]);
    }
  }
  
  return result;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  
  if (!root) return false;
  
  const stack = [{root, high: null, low: null}];

  while (stack.length) {
    let {root, high, low} = stack.pop();
    let currVal = root.val;
    

    if (low !== null && currVal <= low) {
      return false;
    }
    
    if (high !== null && currVal >= high) {
      return false;
    }
    
    if (root.right) {
      stack.push({root: root.right, low: currVal, high});
    }
    if (root.left) {
      stack.push({root: root.left, low, high: currVal});
    }
  }
  
  return true;
};
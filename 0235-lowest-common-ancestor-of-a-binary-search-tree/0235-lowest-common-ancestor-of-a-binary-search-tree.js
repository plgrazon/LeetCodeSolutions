/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const stack = [root];
  
  while (stack.length) {
    let node = stack.pop();
    let val = node.val;
    let pVal = p.val;
    let qVal = q.val;
    
    if (val < pVal && val < qVal) {
      stack.push(node.right);
    } else if (val > pVal && val > qVal) {
      stack.push(node.left);
    } else {
      return node;
    }
  }
  
  return null;
}

var lowestCommonAncestorRec = function(root, p, q) {
  const dp = root => {
    let val = root.val;
    let pVal = p.val;
    let qVal = q.val;
    
    if (val > pVal && val > qVal) return dp(root.left);
    else if (val < pVal && val < qVal) return dp(root.right);
    else return root;
  }
  
  return dp(root);
};
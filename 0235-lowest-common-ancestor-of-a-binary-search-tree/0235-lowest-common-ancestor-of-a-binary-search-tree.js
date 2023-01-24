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
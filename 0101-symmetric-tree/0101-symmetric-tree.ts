/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  const traverse = (root1: TreeNode | null, root2: TreeNode | null) => {
    if (root1 === null && root2 === null) return true;
    if (root1 === null || root2 === null) return false;

    return (root1.val === root2.val) && traverse(root1.left, root2.right) && traverse(root1.right, root2.left);
  }


  return traverse(root, root);
};
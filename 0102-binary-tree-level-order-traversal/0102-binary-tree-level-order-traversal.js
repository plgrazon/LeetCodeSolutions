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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];
  
  const bfs = (tree, level) => {
    if (result.length === level) result.push([]);
    
    result[level].push(tree.val);
    if (tree.left) bfs(tree.left, level + 1);
    if (tree.right) bfs(tree.right, level + 1);
  }
  
  if (!root) return result;
  bfs(root, 0);
  return result;
}

var levelOrderLoop = function(root) {
  const queue = [root];
  const result = [];

  if (!root) return result;

  while (queue.length) {
    let level = queue.length;
    let levelArr = [];

    for (let i = 0; i < level; i++) {
      let node = queue.shift();        
      if (node) levelArr.push(node.val);
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }

    result.push(levelArr);
  }

  return result;
};
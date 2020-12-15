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
 * @return {number}
 */
var maxDepth = function (root) {
  // If the tree is empty, the depth is null
  if (root == undefined) {
    return 0;
  }

  // recursively check all children and their childrens
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Add +1 each level. When if reachs the leafs, it'll return 0, then all levells
  // above will add +1 to the level
  if (leftDepth > rightDepth) {
    return leftDepth + 1;
  } else {
    return rightDepth + 1;
  }
};

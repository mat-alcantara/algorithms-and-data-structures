// This function finds the maximum depth of a binary tree

function maxDepth(tree) {
  // If the tree is empty, the depth is null
  if (tree.val == null) {
    return 0;
  }

  // recursively check all children and their childrens
  const leftDepth = maxDepth(tree.left);
  const rightDepth = maxDepth(tree.right);

  // Add +1 each level. When if reachs the leafs, it'll return 0, then all levells
  // above will add +1 to the level
  if (leftDepth > rightDepth) {
    return leftDepth + 1;
  } else {
    return rightDepth + 1;
  }
}

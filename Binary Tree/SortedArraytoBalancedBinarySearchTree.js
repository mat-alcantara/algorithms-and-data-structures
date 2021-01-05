// var TreeNode = function(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//      this.right = (right===undefined ? null : right)
//  }

var sortedArrayToBST = function (nums) {
  if (!nums.length) {
    return null;
  }

  // Find the middle of the array
  let middle = Math.floor(nums.length / 2);

  // Make the middle item the root
  let root = new TreeNode(nums[middle]);

  root.left = sortedArrayToBST(nums.slice(0, middle));
  root.right = sortedArrayToBST(nums.slice(middle + 1, nums.length));

  return root;
};

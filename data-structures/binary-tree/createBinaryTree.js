// This code creates a binary tree of
//             5
//          /     \
//         4       3
//        / \     / \
//    null null null null

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const binaryTree = new Node(5);
binaryTree.left = new Node(4);
binaryTree.right = new Node(3);

console.log(binaryTree);

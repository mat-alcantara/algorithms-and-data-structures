var deleteNode = function (node) {
  let temp = node.val;

  node.val = node.next.val;
  node.next = node.next.next;
};

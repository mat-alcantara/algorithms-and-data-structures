/*
Initialize three pointers prev as NULL, curr as head and next as NULL.
Iterate through the linked list. In loop, do following. 
  Before changing next of current, store next node 
      next = curr->next
    Now change next of current 
    This is where actual reversing happens 
      curr->next = prev 
    Move prev and curr one step forward 
      prev = curr 
      curr = next
*/

function reverseLinkedList(head) {
  let prev = null;
  let next = null;
  let current = head;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null
  }
  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    let element = new ListNode(value)
    if (this.head) {
      let currEl = this.head
      while (currEl.next) {
        currEl = currEl.next
      }
      currEl.next = element
    } else {
      this.head = element
    }
  }

  dequeue() {
    const first = this.head.value
    this.head = this.head.next
    return first
  }
}

module.exports = {
  Queue
};

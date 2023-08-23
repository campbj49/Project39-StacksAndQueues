/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    //first make the node to be added
    let newNode = new Node(val);
    //handle first value getting added
    if(this.size ===0) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    }
    else{
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    //first check if it's an empty list
    if(this.size === 0) throw new Error("ERROR: Cannot dequeue and empty list");
    //otherwise update the head node and return the old head
    let oldFirst = this.first;
    this.first = this.first.next;
    this.size --;
    return oldFirst.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(100);

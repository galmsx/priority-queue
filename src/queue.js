const MaxHeap = require("./max-heap.js");

class PriorityQueue {
  constructor(maxSize) {
    this.maxSize = maxSize || 30;
    this.heap = new MaxHeap();
  }

  push(data, priority) {
    if (this.heap.size() == this.maxSize) throw Error("too much");
    this.heap.push(data, priority);
  }

  shift() {
    if (!this.heap.size()) throw Error("is empty");
    return this.heap.pop();
  }

  size() {
	  return this.heap.size();
  }

  isEmpty() {
	  return !(this.heap.size());
  }
}

module.exports = PriorityQueue;

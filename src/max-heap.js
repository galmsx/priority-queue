const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root =null;
		this.parentNodes =[];
	}

	push(data, priority) {
		let node = new Node(data,priority);
		this.insertNode(node);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		if(this.root === null){this.root =node; this.root.parent=null;}
		this.root.appendChild(node);
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;

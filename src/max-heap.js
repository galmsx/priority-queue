const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root =null;
		this.parentNodes =[];
		this.lastIns = null;
		this.Qsize = 0;
	}

	push(data, priority) {
		let node = new Node(data,priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.Qsize++;
	}

	pop() {
		if(!this.root) return;
		this.Qsize--;
		let detached = this.detachRoot();
		this.restoreRootFromLastInsertedNode(detached);
		this.shiftNodeDown(this.root);
		return detached.data;
	}

	detachRoot() {
		let detached = this.root;
		this.root = null;
		return detached;
	}
	shiftNodeDown(node) {
		if(node.left && node.right){
			if(!(node.priority >= node.left.priority) || !(node.priority >= node.right.priority)){
				if(node.right.priority >= node.left.priority) node.right.swapWithParent();
				else node.left.swapWithParent();
				this.shiftNodeDown(node);
			}
		}
		if(node.right && !node.left)
		{
			if(!(node.right.priority <= node.priority)){
				node.right.swapWithParent();
				this.shiftNodeDown(node);
			}

		}
		if(!node.right && node.left)
		{
			if(!(node.left.priority <= node.priority)){
				node.left.swapWithParent();
				this.shiftNodeDown(node);
			}
		}

		this.lastIns = node;

		
	}

	restoreRootFromLastInsertedNode(detached) {
		this.root = this.lastIns;
		if(this.root.parent && this.root.parent.left == this.root )
		 this.root.parent.left = null;
		if(this.root.parent && this.root.parent.right == this.root )
		 this.root.parent.right = null;

		this.root.left = detached.left;
		if(detached.left) detached.left.parent = this.root;
		this.root.right = detached.right;
		if(detached.right) detached.right.parent = this.root;
		this.root.parent = null;
	}

	size() {
		return this.Qsize;
	}

	isEmpty() {
		return (!this.root);
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.Qsize = 0;
	}

	insertNode(node) {
		this.lastIns = node;
		if(this.root === null){this.root = node; this.root.parent=null; return;}
		let temp = this.root;
		while(temp.left && temp.right) temp = temp.left;
		temp.appendChild(node);
	}

	shiftNodeUp(node) {
		if(!node.parent) return;
		if(node.priority >= node.parent.priority){
			node.swapWithParent();
			if(!node.parent) this.root = node;
			this.shiftNodeUp(node);
		}
		
	}


}

module.exports = MaxHeap;

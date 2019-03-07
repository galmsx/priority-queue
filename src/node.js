class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  appendChild(node) {
    if (!this.left) this.left = node;
    else if (!this.right) this.right = node;
  }

  removeChild(node) {
    if (node == this.left) this.left = null;
    else if (node == this.right) this.right = null;
    else throw Error("this node is not a child!");
    node.parent = null;
  }

  remove() {
    if (this.parent == null) return;
	this.parent.removeChild(this);
	this.left.removeChild(this.left);
	this.right.removeChild(this.right);
  }

  swapWithParent() {
	if (this.parent == null) return;
	var parent = this.parent;
    if (this.parent.left == this) {
		this.parent = parent.parent;
		parent.parent = this;
		this.left = parent;

    } else {
    }
  }
}

module.exports = Node;

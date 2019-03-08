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
    var that = this;
	this.parent.removeChild(that);
  }

  swapWithParent() {
	if (this.parent == null) return;
  const parent = this.parent;
  const par_left = parent.left;
  const par_right = parent.right;
  var par_par = parent.parent;

    if (parent.left === this) {//если это левый детеныш
      this.parent = par_par;
      parent.parent = this;
      parent.parent.parent = par_par;
      parent.left = this.left;
      parent.right = this.right;
      this.left = parent;
      this.right = par_right;
    } else {
      this.parent = par_par;
      parent.parent = this;
      parent.left = this.left;
      parent.right = this.right;
      this.right = parent;
      this.left = par_left;

    }
  }
}

module.exports = Node;

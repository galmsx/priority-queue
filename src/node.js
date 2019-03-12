class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  appendChild(node) {
    if(!this.left){
      this.left = node;
      node.parent = this;
    }
    else if(!this.right){
      this.right=node;
      node.parent = this;
    }
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
  }

  swapWithParent() {
  if (this.parent == null) return;
  
  let parent = this.parent;
  let par_left = parent.left;
  let par_right = parent.right;
  var par_par = parent.parent;
  if((parent.parent) && (parent.parent.left == parent)){
    parent.parent.left = this;
  }
  if((parent.parent) && (parent.parent.right == parent)){
    parent.parent.right = this;
  }
  this.parent = parent.parent;
  

    if (parent.left == this) {
      parent.parent = this;
      parent.left = this.left;
      if(parent.left != null) parent.left.parent = parent;
      parent.right = this.right;
      if(parent.right != null) parent.right.parent = parent;
      this.left = parent;
      this.right = par_right;
      if(this.right != null) this.right.parent = this;
    } else {
      parent.parent = this;
      parent.left = this.left;
      if(parent.left != null) parent.left.parent = parent;
      parent.right = this.right;
      if(parent.right != null) parent.right.parent = parent;
      this.right = parent;
      this.left = par_left;
      if(this.left != null) this.left.parent = this;
    }
  }
}

module.exports = Node;

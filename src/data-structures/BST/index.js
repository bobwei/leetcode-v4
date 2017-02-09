/* eslint-disable no-param-reassign */
export class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

export default class BST {
  constructor() {
    this.root = null;
  }

  insert(...keys) {
    keys.forEach((key) => {
      this.root = this.insertRecursively(this.root, key);
    });
    return this;
  }

  insertRecursively(root, key) {
    if (!root) {
      return new TreeNode(key);
    }
    if (key < root.val) {
      root.left = this.insertRecursively(root.left, key);
    } else if (key > root.val) {
      root.right = this.insertRecursively(root.right, key);
    }
    return root;
  }

  inOrder() {
    const output = [];
    const stack = [];
    let ptr = this.root;
    while (ptr || stack.length) {
      if (ptr) {
        stack.push(ptr);
        ptr = ptr.left;
      } else {
        const node = stack.pop();
        output.push(node.val);
        ptr = node.right;
      }
    }
    return output;
  }

  findMin() {
    let ptr = this.root;
    while (ptr.left) {
      ptr = ptr.left;
    }
    return ptr.val;
  }

  findMax() {
    let ptr = this.root;
    while (ptr.right) {
      ptr = ptr.right;
    }
    return ptr.val;
  }
}

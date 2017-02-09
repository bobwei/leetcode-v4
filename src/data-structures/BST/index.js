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
}

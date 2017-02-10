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

  delete(...keys) {
    keys.forEach((key) => {
      this.root = this.deleteRecursively(this.root, key);
    });
    return this;
  }

  deleteRecursively(root, key) {
    if (!root) {
      return root;
    }
    if (key === root.val) {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        const min = this.findMin(root.right);
        root.val = min;
        root.right = this.deleteRecursively(root.right, min);
        return root;
      }
    } else if (key < root.val) {
      root.left = this.deleteRecursively(root.left, key);
    } else if (key > root.val) {
      root.right = this.deleteRecursively(root.right, key);
    }
    return root;
  }

  findMin(root = this.root) {
    while (root.left) {
      root = root.left;
    }
    return root.val;
  }

  findMax(root = this.root) {
    while (root.right) {
      root = root.right;
    }
    return root.val;
  }
}

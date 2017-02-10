export default class BST {
  constructor(size = 10) {
    this.nodes = [...Array(size)].fill(null);
  }

  insert(...keys) {
    keys.forEach((key) => {
      let ptr = 0;
      while (this.nodes[ptr] !== null && key !== this.nodes[ptr].val) {
        if (key < this.nodes[ptr]) {
          ptr = 2 * ptr + 1;
        } else if (key > this.nodes[ptr]) {
          ptr = 2 * ptr + 2;
        }
      }
      this.nodes[ptr] = key;
    });
    return this;
  }

  inOrder() {
    const output = [];
    const stack = [];
    let ptr = 0;
    while (this.nodes[ptr] !== null || stack.length) {
      if (this.nodes[ptr]) {
        stack.push(ptr);
        ptr = 2 * ptr + 1;
      } else {
        const index = stack.pop();
        output.push(this.nodes[index]);
        ptr = 2 * index + 2;
      }
    }
    return output;
  }

  delete(key) {}

  findMin() {}

  findMax() {}
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  if (!root) {
    return 0;
  }
  let maxDepthSofar = 1;
  const queue = [[root, maxDepthSofar]];
  while (queue.length) {
    const [node, depth] = queue.pop();
    maxDepthSofar = Math.max(depth, maxDepthSofar);
    if (node.left) {
      queue.push([node.left, depth + 1]);
    }
    if (node.right) {
      queue.push([node.right, depth + 1]);
    }
  }
  return maxDepthSofar;
};

export default maxDepth;

import BST from './index';

it('can insert keys to BST', () => {
  const bst = new BST();
  bst.insert(1, 2, 3).insert(0);
  expect(bst.root.right.right.val).toBe(3);
});

it('can do inOrder traversal', () => {
  const bst = new BST();
  bst.insert(1, 2, 3, 7, 5, 4, 6);
  expect(bst.inOrder()).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

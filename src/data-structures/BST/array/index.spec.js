import BST from './index';

it('can insert keys to BST', () => {
  const bst = new BST(10);
  bst.insert(1, 2, 3).insert(0);
  expect(bst.nodes).toEqual([1, 0, 2, null, null, null, 3, null, null, null]);
});

it('can do inOrder traversal', () => {
  const bst = new BST(10);
  bst.insert(3, 1, 2, 7);
  expect(bst.inOrder()).toEqual([1, 2, 3, 7]);
});

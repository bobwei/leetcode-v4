import BST from './index';

it('can insert keys to BST', () => {
  const bst = new BST();
  bst.insert(1, 2, 3).insert(0);
  expect(bst.root.right.right.val).toBe(3);
});

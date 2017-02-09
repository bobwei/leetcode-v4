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

it('can findMin and findMax', () => {
  const bst = new BST();
  bst.insert(1, 2, 3, 7, 5, 4, 6);
  expect(bst.findMin()).toBe(1);
  expect(bst.findMax()).toBe(7);
});

it('can delete key', () => {
  const bst = new BST();
  bst
    .insert(1, 2, 3, 7, 5, 4, 6)
    .delete(1)
    .delete(1, 2, 3, 4, 5)
    .delete(1, 2, 3, 4, 5)
    .insert(1, 2, 3, 4, 5)
    .delete(1, 2, 3, 4, 5, 6, 7)
    .insert(4, 2, 1, 3, 6, 5, 7)
    .delete(6);
  expect(bst.inOrder()).toEqual([1, 2, 3, 4, 5, 7]);
});

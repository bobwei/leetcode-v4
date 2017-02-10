import { BST } from './index';

it('can construt BST', () => {
  const bst = new BST();
  bst.insert(1, 3, 7, 6, 4, 5, 2);
  expect(bst.inOrder()).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

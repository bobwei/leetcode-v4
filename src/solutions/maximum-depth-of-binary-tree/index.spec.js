import BT from 'data-structures/BT';

import maxDepth from './index';

it('maxDepth [1, 2, 3, 4, 5, 6, 7]', () => {
  const bt = BT.from([1, 2, 3, 4, 5, 6, 7]);
  expect(maxDepth(bt.root)).toBe(3);
});

it('maxDepth [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]', () => {
  const bt = BT.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  expect(maxDepth(bt.root)).toBe(4);
});

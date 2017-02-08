import findDuplicate from './index';

it('findDuplicate [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]', () => {
  expect(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9])).toBe(9);
});

it('findDuplicate [1, 2, 3, 4, 5, 6, 7, 8, 8, 9]', () => {
  expect(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 8, 9])).toBe(8);
});

it('findDuplicate [1, 2, 3, 4, 5, 5, 6, 7, 8, 9]', () => {
  expect(findDuplicate([1, 2, 3, 4, 5, 5, 6, 7, 8, 9])).toBe(5);
});

it('findDuplicate [1, 1]', () => {
  expect(findDuplicate([1, 1])).toBe(1);
});

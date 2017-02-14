import searchRange from './index';

it('searchRange', () => {
  expect(searchRange([1, 2, 3], 2)).toEqual([1, 1]);
});

it('searchRange([5, 7, 7, 8, 8, 8, 8, 8, 10], 8)', () => {
  expect(searchRange([5, 7, 7, 8, 8, 8, 8, 8, 10], 8)).toEqual([3, 7]);
});

it('searchRange([5, 7, 7, 8, 8, 10], 8)', () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
});

it('searchRange([1, 2, 3, 4], 8)', () => {
  expect(searchRange([1, 2, 3, 4], 8)).toEqual([-1, -1]);
});

it('searchRange([1, 2, 3, 4, 5, 6, 7, 9, 10], 8)', () => {
  expect(searchRange([1, 2, 3, 4, 5, 6, 7, 9, 10], 8)).toEqual([-1, -1]);
});

it('searchRange([], 8)', () => {
  expect(searchRange([], 8)).toEqual([-1, -1]);
});

it('searchRange([1], 1)', () => {
  expect(searchRange([1], 1)).toEqual([0, 0]);
});

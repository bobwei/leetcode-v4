import combinationSum from './index';

it('combinationSum [2, 3, 7, 6], 7', () => {
  expect(combinationSum([2, 3, 7, 6], 7))
    .toEqual([[2, 2, 3], [7]]);
});

it('combinationSum [2, 3, 7, 6], 0', () => {
  expect(combinationSum([2, 3, 7, 6], 0))
    .toEqual([]);
});

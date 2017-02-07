import R from 'ramda';
import unsortedLargestDivisibleSubset from './index';

const largestDivisibleSubset = R.compose(
  R.sort((a, b) => a - b),
  unsortedLargestDivisibleSubset,
);

it('largestDivisibleSubset [1, 2, 4, 8, 11]', () => {
  expect(largestDivisibleSubset([1, 2, 4, 8, 11]))
    .toEqual([1, 2, 4, 8]);
});

it('largestDivisibleSubset [1]', () => {
  expect(largestDivisibleSubset([1]))
    .toEqual([1]);
});

it('largestDivisibleSubset []', () => {
  expect(largestDivisibleSubset([]))
    .toEqual([]);
});

it('largestDivisibleSubset [1, 2, 4, 8, 16, 32]', () => {
  expect(largestDivisibleSubset([1, 2, 4, 8, 16, 32]))
    .toEqual([1, 2, 4, 8, 16, 32]);
});

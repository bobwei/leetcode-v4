/* eslint-disable max-len */
import findTargetSumWays from './index';

it('findTargetSumWays([1, 1, 1], 1)', () => {
  expect(findTargetSumWays([1, 1, 1], 1)).toBe(3);
});

it('findTargetSumWays([1, 1, 1, 1, 1], 3)', () => {
  expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toBe(5);
});

it('findTargetSumWays([1], 2)', () => {
  expect(findTargetSumWays([1], 2)).toBe(0);
});

it('findTargetSumWays([1, 1, 9, 100], 101)', () => {
  expect(findTargetSumWays([1, 1, 9, 100], 101)).toBe(0);
});

it('findTargetSumWays([47, 23, 35, 27, 30, 42, 26, 42, 30, 6, 8, 48, 44, 38, 41, 50, 18, 19, 19, 5], 101)', () => {
  expect(findTargetSumWays([47, 23, 35, 27, 30, 42, 26, 42, 30, 6, 8, 48, 44, 38, 41, 50, 18, 19, 19, 5], 40)).toBe(5382);
});

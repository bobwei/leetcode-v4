import lengthOfLIS from './index';

it('lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])', () => {
  expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
});

it('lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18, 20])', () => {
  expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18, 20])).toBe(5);
});

it('lengthOfLIS([])', () => {
  expect(lengthOfLIS([])).toBe(0);
});

it('lengthOfLIS([10])', () => {
  expect(lengthOfLIS([10])).toBe(1);
});

it('lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6])', () => {
  expect(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6])).toBe(6);
});

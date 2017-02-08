import containsNearbyDuplicate from './index';

it('containsNearbyDuplicate([1, 2, 3, 4, 5, 5, 6, 7, 8], 5)', () => {
  expect(containsNearbyDuplicate([1, 2, 3, 4, 5, 5, 6, 7, 8], 5)).toBe(true);
});

it('containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8], 5)', () => {
  expect(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8], 5)).toBe(false);
});

it('containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 1], 7)', () => {
  expect(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 1], 7)).toBe(true);
});

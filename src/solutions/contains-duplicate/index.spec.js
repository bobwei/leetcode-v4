import containsDuplicate from './index';

it('containsDuplicate [1, 2, 2, 4]', () => {
  expect(containsDuplicate([1, 2, 2, 4])).toBe(true);
});

it('containsDuplicate [1, 2, 3, 4]', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

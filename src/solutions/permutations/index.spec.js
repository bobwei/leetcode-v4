import permute from './index';
import expectedResult from './testCases/123.json';

it('permute', () => {
  const nums = [1, 2, 3];
  expect(permute(nums)).toEqual(expectedResult);
});

import findSubsequences from './index';
import largeInput from './testCases/largeInput.json';
import largeExpectedResult from './testCases/largeExpectedResult.json';

it('findSubsequences [4, 6, 7, 7]', () => {
  const input = [4, 6, 7, 7];
  const expectedResult = [
    [4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7, 7], [4, 7, 7],
  ];
  expect(findSubsequences(input).sort())
    .toEqual(expectedResult.sort());
});

it('findSubsequences [4, 3, 2, 1]', () => {
  const input = [4, 3, 2, 1];
  const expectedResult = [];
  expect(findSubsequences(input).sort())
    .toEqual(expectedResult.sort());
});

it('findSubsequences large case', () => {
  expect(findSubsequences(largeInput).sort())
    .toEqual(largeExpectedResult.sort());
});

it('findSubsequences large case [1,2,3,4,5,6,7,8,9,10,11]', () => {
  const input = JSON.parse('[1,2,3,4,5,6,7,8,9,10,11]');
  findSubsequences(input);
});

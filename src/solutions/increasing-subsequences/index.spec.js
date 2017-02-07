/* eslint-disable global-require */
import findSubsequences from './index';

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
  const largeInput = require('./testCases/case1/largeInput.json');
  const largeExpectedResult = require('./testCases/case1/largeExpectedResult.json');
  expect(findSubsequences(largeInput).sort())
    .toEqual(largeExpectedResult.sort());
});

it('findSubsequences large case [1,2,3,4,5,6,7,8,9,10,11,12]', () => {
  const largeInput = require('./testCases/case2/largeInput.json');
  const largeExpectedResult = require('./testCases/case2/largeExpectedResult.json');
  expect(findSubsequences(largeInput).sort())
    .toEqual(largeExpectedResult.sort());
});

it('findSubsequences large case [1,2,3,4,5,6,7,8,9,10,11,12] test performance', () => {
  const largeInput = require('./testCases/case2/largeInput.json');
  findSubsequences(largeInput);
});

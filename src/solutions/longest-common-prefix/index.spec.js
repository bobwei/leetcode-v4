/* eslint-disable quotes */
import longestCommonPrefix from './index';

it(`longestCommonPrefix(['abc', 'ab'])`, () => {
  expect(longestCommonPrefix(['abc', 'ab'])).toEqual('ab');
});

it(`longestCommonPrefix(['abcd', 'abccc', 'abdec'])`, () => {
  expect(longestCommonPrefix(['abcd', 'abccc', 'abdec'])).toEqual('ab');
});

it(`longestCommonPrefix(['abc'])`, () => {
  expect(longestCommonPrefix(['abc'])).toEqual('abc');
});

it(`longestCommonPrefix([])`, () => {
  expect(longestCommonPrefix([])).toEqual('');
});

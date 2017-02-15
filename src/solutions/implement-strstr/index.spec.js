/* eslint-disable quotes */
import strStr from './index';

it(`strStr('abcde', 'abc')`, () => {
  expect(strStr('abcde', 'abc')).toBe(0);
});

it(`strStr('abcde', 'cde')`, () => {
  expect(strStr('abcde', 'cde')).toBe(2);
});

it(`strStr('abcdesss', 'xyz')`, () => {
  expect(strStr('abcdesss', 'xyz')).toBe(-1);
});

it(`strStr('abcdeqwdqkwdlqwjdl', 'abcdeqwdqkwdlqwjdl')`, () => {
  expect(strStr('abcdeqwdqkwdlqwjdl', 'abcdeqwdqkwdlqwjdl')).toBe(0);
});

it(`strStr('abcdeqwdqkwdlqwjdl', 'dlqwjdl')`, () => {
  expect(strStr('abcdeqwdqkwdlqwjdl', 'dlqwjdl')).toBe(11);
});

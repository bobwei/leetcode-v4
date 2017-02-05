import fizzBuzz from './index';
import expectedResultOf15 from './testCases/15.json';

it('fizzBuzz', () => {
  expect(fizzBuzz(15)).toEqual(expectedResultOf15);
});

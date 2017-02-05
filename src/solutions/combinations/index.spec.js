import R from 'ramda';

import combine from './index';
import case1 from './testCases/case1.json';

it('combine', () => {
  expect(combine(4, 2))
    .toEqual(
      R.sort((a, b) => {
        let i = 0;
        while (a[i] === b[i] && i < a.length && i < b.length) {
          i += 1;
        }
        return a[i] - b[i];
      })(case1),
    );
});

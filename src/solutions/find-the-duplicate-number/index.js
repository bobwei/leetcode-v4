/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
  let i = 1;
  let j = nums.length - 1;
  let mid = Math.floor((i + j) / 2);
  while (i < j) {
    let nLessThanMid = 0;
    let nMid = 0;
    let nGreaterThanMid = 0;
    for (const num of nums) {
      if (num >= i && num < mid) {
        nLessThanMid += 1;
      } else if (num === mid) {
        nMid += 1;
      } else if (num > mid && num <= j) {
        nGreaterThanMid += 1;
      }
    }
    /* if duplicate at mid, end loop */
    if (nMid > 1) {
      return mid;
    }
    /* next round */
    if (nLessThanMid > mid - i) {
      j = mid - 1;
    } else if (nGreaterThanMid > j - mid) {
      i = mid + 1;
    }
    mid = Math.floor((i + j) / 2);
  }
  return mid;
};

export default findDuplicate;

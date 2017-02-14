/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 /*
  reference :
  http://bangbingsyb.blogspot.tw/2014/11/leetcode-search-for-range.html
 */

const findLess = (nums, target) => {
  let i = 0;
  let j = nums.length - 1;
  let m;
  while (i <= j) {
    m = Math.floor((i + j) / 2);
    if (target > nums[m]) {
      i = m + 1;
    } else if (target < nums[m]) {
      j = m - 1;
    } else if (target === nums[m]) {
      j = m - 1;
    }
  }
  if (i >= 0 && i < nums.length && nums[i] === target) {
    return i;
  }
  return -1;
};

const findGreater = (nums, target) => {
  let i = 0;
  let j = nums.length - 1;
  let m;
  while (i <= j) {
    m = Math.floor((i + j) / 2);
    if (target > nums[m]) {
      i = m + 1;
    } else if (target < nums[m]) {
      j = m - 1;
    } else if (target === nums[m]) {
      i = m + 1;
    }
  }
  if (j >= 0 && j < nums.length && nums[j] === target) {
    return j;
  }
  return -1;
};

const searchRange = (nums, target) => [
  findLess(nums, target),
  findGreater(nums, target),
];

export default searchRange;

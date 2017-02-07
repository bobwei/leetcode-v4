/* eslint-disable no-continue */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = (nums, start = 0, output = new Map(), current = []) => {
  if (current.length >= 2) {
    output.set(current.toString(), [...current]);
  }
  for (let i = start; i < nums.length; i++) {
    /* ensure increasing */
    if (nums[i] < current[current.length - 1]) {
      continue;
    }
    current.push(nums[i]);
    findSubsequences(nums, i + 1, output, current);
    current.pop();
  }
  return [...output.values()];
};

export default findSubsequences;

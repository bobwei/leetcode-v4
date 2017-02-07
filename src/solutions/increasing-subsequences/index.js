/* eslint-disable no-continue, no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = (nums, start = 0, output = [], current = [], cache = {}) => {
  if (current.length >= 2) {
    const key = current.toString();
    if (!cache[key]) {
      cache[key] = true;
      output.push([...current]);
    }
  }
  for (let i = start; i < nums.length; i++) {
    /* ensure increasing */
    if (nums[i] < current[current.length - 1]) {
      continue;
    }
    current.push(nums[i]);
    findSubsequences(nums, i + 1, output, current, cache);
    current.pop();
  }
  return output;
};

export default findSubsequences;

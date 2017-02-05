/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums, output = [], current = [], cache = {}) => {
  if (current.length >= nums.length) {
    output.push([...current]);
    return output;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!cache[i]) {
      cache[i] = true;
      current.push(nums[i]);
      permute(nums, output, current, cache);
      cache[i] = false;
      current.pop();
    }
  }
  return output;
};

export default permute;

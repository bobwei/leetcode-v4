/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (cache[num]) {
      return true;
    }
    cache[num] = true;
  }
  return false;
};

export default containsDuplicate;

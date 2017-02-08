/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  const indexCache = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (indexCache[num] !== undefined) {
      if (i - indexCache[num] <= k) {
        return true;
      }
    }
    indexCache[num] = i;
  }
  return false;
};

export default containsNearbyDuplicate;

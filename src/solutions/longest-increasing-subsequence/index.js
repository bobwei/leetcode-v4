/**
 * @param {number[]} nums
 * @return {number}
 */
/*
  dp[i] = 1 + max{dp[j]}, 0 <= j < i, if nums[j] < nums[i]
*/
const lengthOfLIS = (nums) => {
  if (!nums.length) {
    return 0;
  }
  const dp = [...Array(nums.length)].fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

export default lengthOfLIS;

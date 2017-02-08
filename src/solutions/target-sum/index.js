const DP = () => {
  const data = {};
  const getKey = (i, j) => `${i},${j}`;
  return {
    get(i, j) {
      return data[getKey(i, j)];
    },
    set(i, j, value) {
      data[getKey(i, j)] = value;
    },
  };
};

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
*/
const findTargetSumWays = (nums, S, dp = DP()) => {
  const sumOfNums = nums.reduce((acc, cur) => acc + cur);
  for (let i = 0; i < 1; i++) {
    for (let s = -sumOfNums; s <= sumOfNums; s++) {
      const sum1 = (0 - nums[i] === s) ? 1 : 0;
      const sum2 = (0 + nums[i] === s) ? 1 : 0;
      dp.set(i, s, sum1 + sum2);
    }
  }
  for (let i = 1; i < nums.length; i++) {
    for (let s = -sumOfNums; s <= sumOfNums; s++) {
      const value = (
        (dp.get(i - 1, s - nums[i]) || 0) +
        (dp.get(i - 1, s + nums[i]) || 0)
      );
      dp.set(i, s, value);
    }
  }
  return dp.get(nums.length - 1, S) || 0;
};

export default findTargetSumWays;

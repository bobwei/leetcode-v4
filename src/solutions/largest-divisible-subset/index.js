/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = (nums) => {
  nums.sort((a, b) => a - b);
  let maxSoFar = 1;
  let maxSoFarIndex = -1;
  const divisibleSetCount = [...Array(nums.length)].fill(maxSoFar);
  const divisibleSetTracker = [...Array(nums.length)].fill(maxSoFarIndex);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      /* if divisible */
      if (nums[i] % nums[j] === 0) {
        if (divisibleSetCount[j] + 1 >= divisibleSetCount[i]) {
          divisibleSetCount[i] = divisibleSetCount[j] + 1;
          divisibleSetTracker[i] = j;
        }
      }
    }
    if (divisibleSetCount[i] >= maxSoFar) {
      maxSoFar = divisibleSetCount[i];
      maxSoFarIndex = i;
    }
  }

  /* back tracking */
  let ptr = maxSoFarIndex;
  const divisibleSet = [];
  while (ptr >= 0) {
    divisibleSet.push(nums[ptr]);
    ptr = divisibleSetTracker[ptr];
  }
  return divisibleSet;
};

export default largestDivisibleSubset;

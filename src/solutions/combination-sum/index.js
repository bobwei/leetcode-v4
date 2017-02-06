/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target, start = 0, output = [], current = []) => {
  const currentSum = current.reduce((acc, cur) => acc + cur, 0);
  if (currentSum >= target) {
    if (currentSum === target && target > 0) {
      output.push([...current]);
    }
    return output;
  }
  for (let i = start; i < candidates.length; i++) {
    current.push(candidates[i]);
    combinationSum(candidates, target, i, output, current);
    current.pop();
  }
  return output;
};

export default combinationSum;

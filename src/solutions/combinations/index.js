/* eslint-disable no-param-reassign */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k, start = 1, output = [], current = [], cache = []) => {
  if (current.length >= k) {
    output.push([...current]);
    return output;
  }
  for (let i = start; i <= n; i++) {
    if (!cache[i]) {
      cache[i] = true;
      current.push(i);
      combine(n, k, i + 1, output, current, cache);
      cache[i] = false;
      current.pop();
    }
  }
  return output;
};

export default combine;

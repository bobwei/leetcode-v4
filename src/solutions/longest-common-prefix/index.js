/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  if (!strs.length) {
    return '';
  }
  const refStr = strs[0];
  let longestPrefixCount = refStr.length;
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    let j = 0;
    while (j < str.length && refStr[j] === str[j]) {
      j += 1;
    }
    longestPrefixCount = Math.min(longestPrefixCount, j);
  }
  return refStr.slice(0, longestPrefixCount);
};

export default longestCommonPrefix;

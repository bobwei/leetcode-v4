/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j;
    for (j = 0; j < needle.length; j++) {
      if (needle[j] !== haystack[i + j]) {
        break;
      }
    }
    if (j >= needle.length) {
      return i;
    }
  }
  return -1;
};

export default strStr;

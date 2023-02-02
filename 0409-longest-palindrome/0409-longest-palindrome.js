/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const hash = {};
  let longest = 0;

  for (let char of s) {
    hash?.[char] ? hash[char]++ : hash[char] = 1;
    hash[char] % 2 === 0 ? longest += 2 : null;
  }

  return s.length > longest ? longest + 1 : longest;
};
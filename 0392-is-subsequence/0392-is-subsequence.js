/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let sIdx = 0;
  let tIdx = 0;
  
  while (tIdx < t.length) {
    if (t[tIdx] === s[sIdx]) sIdx++
    if (sIdx === s.length) return true;
    tIdx++;
  }
  
  return sIdx === s.length;
};
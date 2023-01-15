/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let sHash = {};
  let tHash = {};
  
  if (s.length !== t.length) return false;
  
  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];
        
    if (!sHash.hasOwnProperty(sChar) && !tHash.hasOwnProperty(tChar)) {
      sHash[sChar] = tChar;
      tHash[tChar] = sChar;
    } else if (sHash[sChar] !== tChar || tHash[tChar] !== sChar) {
      return false;
    } 
  }
    
  return true;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  
  for (let i = 0; i < s.length; i++) {
    const isOpening = !pairs.hasOwnProperty(s[i]);
    
    if (isOpening) {
      stack.push(s[i]);
    } else {
      const top = stack.pop();
      
      if (top !== pairs[s[i]]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
};
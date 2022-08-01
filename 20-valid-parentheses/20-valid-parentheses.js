/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  }
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    
    if (!pairs.hasOwnProperty(curr)) {
      stack.push(curr);
    } else {
      let prev = stack.pop();
      if (prev !== pairs[curr]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
};
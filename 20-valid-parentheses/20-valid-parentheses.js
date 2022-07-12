/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const open = '({[';
  const closed = ')}]';
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
    let isOpen = open.includes(s[i]);
    
    if (isOpen) {
      stack.push(s[i]);
    } else {
      let lastFromQ = stack[stack.length - 1];
      let currParens = s[i];
      
      if (currParens === ')' && lastFromQ !== '(') {
        return false;
      } else if (currParens === '}' && lastFromQ !== '{') {
        return false;
      } else if (currParens === ']' && lastFromQ !== '[') {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  
  return stack.length === 0;
};
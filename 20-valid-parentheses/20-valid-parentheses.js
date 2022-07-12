/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const open = '({[';
  const closed = ')}]';
  const queue = [];
  
  for (let i = 0; i < s.length; i++) {
    let isOpen = open.includes(s[i]);
    
    if (isOpen) {
      queue.push(s[i]);
    } else {
      let lastFromQ = queue[queue.length - 1];
      let currParens = s[i];
      
      if (currParens === ')' && lastFromQ !== '(') {
        return false;
      } else if (currParens === '}' && lastFromQ !== '{') {
        return false;
      } else if (currParens === ']' && lastFromQ !== '[') {
        return false;
      } else {
        queue.pop();
      }
    }
  }
  
  return queue.length === 0;
};
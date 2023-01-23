/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  let prevOne = 1;
  let prevTwo = 0;
  let curr = 0;
  
  if (n === 0) return prevTwo;
  if (n === 1) return prevOne;

  for (let i = 2; i <= n; i++) {
    curr = prevOne + prevTwo;
    prevTwo = prevOne;
    prevOne = curr;
  }
  
  return curr;
}

var fibTopDownMemo = function(n) {
  const memo = {0: 0, 1: 1};
  
  const dp = n => {
    if (n <= 1) return memo[n];
    
    if (memo?.[n]) return memo[n];
    memo[n] = dp(n - 1) + dp(n - 2);
    return memo[n];
  }
  
  return dp(n);
}

var fibTopDown = function(n) {
  const dp = n => {
    if (n <= 0) return 0;
    else if (n === 1) return 1;
    
    return dp(n - 1) + dp(n - 2);
  }
  
  return dp(n);
}

var fibLoop = function(n) {
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  
  if (n < 2) return dp[n];
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
};
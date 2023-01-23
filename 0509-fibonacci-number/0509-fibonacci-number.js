/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
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
/**
 * @param {number} n
 * @return {number}
 */
var climbStairsRec = function(n) {
  const memo = {};
  
  const dp = n => {
    if (n <= 2) {
      return n;
    }
    
    if (dp?.[n]) return dp[n];
    dp[n] = dp(n - 1) + dp(n - 2);
    return dp[n];
  }
  
  return dp(n);
}

var climbStairs = function(n) {
  const dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  
  if (n <= 2) {
    return dp[n]
  }
  
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
};
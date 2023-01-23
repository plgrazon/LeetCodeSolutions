/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  
  if (n <= 2) {
    return dp[n]
  }
  
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  console.log(dp);
  return dp[n];
};
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairsRec = function(cost) {
  const memo = {0: 0, 1: 0};
  
  const dp = (i) => {
    if (i <= 1 || memo?.[i]) return memo[i];
    
    const stepOne = cost[i - 1] + dp(i - 1);
    const stepTwo = cost[i - 2] + dp(i - 2);

    
    memo[i] = Math.min(stepOne, stepTwo);
    return memo[i];
  }

  return dp(cost.length);
}

var minCostClimbingStairs = function(cost) {
  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 1], cost[i - 2]);
  }
  
  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
}

var minCostClimbingStairsLoop = function(cost) {
  const dp = new Array(cost.length + 1);
  dp.fill(0);
  
  for (let i = 2; i <= cost.length; i++) {
    const stepOne = dp[i - 1] + cost[i - 1];
    const stepTwo = dp[i - 2] + cost[i - 2];
    dp[i] = Math.min(stepOne, stepTwo);
  }
  
  return dp[cost.length];
};
function lengthOfLIS(nums: number[]): number {
  let dp: number[] = new Array(nums.length).fill(1);
  let maxLen = 1;

  for (let end = 1; end < nums.length; end++) {
    let endNum = nums[end];
    for (let start = 0; start < end; start++) {
      let startNum = nums[start];
      if (endNum > startNum) {
        dp[end] = Math.max(dp[end], dp[start] + 1);
      }
    }
    maxLen = Math.max(dp[end], maxLen);
  }

  return maxLen;
};
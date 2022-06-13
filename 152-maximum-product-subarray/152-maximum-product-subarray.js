/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = nums[0];
  let currMax = max;
  let currMin = max;
  
  for (let i = 1; i < nums.length; i++) {
    let temp = currMax;
    
    currMax = Math.max(nums[i], currMax * nums[i], currMin * nums[i]);
    currMin = Math.min(nums[i], temp * nums[i], currMin * nums[i]);
    max = Math.max(max, currMax, currMin);
  }
  
  return max;
};
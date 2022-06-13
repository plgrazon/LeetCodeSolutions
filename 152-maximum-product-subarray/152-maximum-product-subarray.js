/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let max = nums[0];
  let currMax = max;
  let currMin = max;
  
  for (let i = 1; i < nums.length; i++) {
    let tempCurrMax = currMax;
    
    currMax = Math.max(nums[i], nums[i] * currMax, nums[i] * currMin);
    currMin = Math.min(nums[i], nums[i] * tempCurrMax, nums[i] * currMin);
    
    max = Math.max(max, currMax);
  }
  
  return max;
};
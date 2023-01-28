/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  
  let max = nums[nums.length - 1];
  let leftSum = 0;
  let rightSum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    rightSum = max - nums[i];
    
    if (leftSum === rightSum) return i;
    
    leftSum = nums[i];
  }
    
  return -1;
};
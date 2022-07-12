/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = {};
  
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];
    
    if (hash.hasOwnProperty(remainder)) {
      return [i, hash[remainder]];
    } else {
      hash[nums[i]] = i;
    }
  }
};
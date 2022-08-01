/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hash = {};
  
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let rem = target - curr;
    
    if (hash.hasOwnProperty(rem)) {
      return [i, hash[rem]];
    } else {
      hash[curr] = i;
    }
  }
  
  return [];
};
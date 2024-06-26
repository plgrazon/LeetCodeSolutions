function removeDuplicates(nums: number[]): number {
  // two pointer
  // time O(n)
  // space O(1)
  if (nums.length <= 0) return 1;

  let writer = 1;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      count++;
    } else {
      count = 1;
    }
    
    if (count <= 2) {
      nums[writer] = nums[i];
      writer++;
    }
  }

  return writer;
};
function canJump(nums: number[]): boolean {
  // time O(n)
  // space O(1)
  let goal = nums[nums.length - 1];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
}
function removeElement(nums: number[], val: number): number {
  let fast = 0;
  let slow = 0;
  const len = nums.length;

  while (fast < len) {
    if (nums[fast] === val) {
      fast++;
    } else {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      fast++;
      slow++;
    }
  }

  return slow;
};
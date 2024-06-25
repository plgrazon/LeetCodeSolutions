function removeElement(nums: number[], val: number): number {
  // fast slow pointer
  // time O(n)
  // space O(1)
  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (nums[fast] === val) {
      fast++;
    } else {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
      fast++;
    }
  }

  return slow;
};
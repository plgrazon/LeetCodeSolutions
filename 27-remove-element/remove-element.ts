function removeElement(nums: number[], val: number): number {
  // fast and slow pointer:
  // time: O(n)
  // space: O(n)
  let fast = 0;
  let slow = 0;

  while (fast < nums.length) {
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
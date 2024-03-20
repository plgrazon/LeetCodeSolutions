function removeElement(nums: number[], val: number): number {
  // fast and slow pointer:
  // time: O(n)
  // space: O(1)
  // let fast = 0;
  // let slow = 0;

  // while (fast < nums.length) {
  //   if (nums[fast] === val) {
  //     fast++;
  //   } else {
  //     [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
  //     fast++;
  //     slow++;
  //   }
  // }
  //
  // return slow;
  //
  // swap ends
  // time: O(n)
  // space: O(1)
  let len = nums.length;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    if (nums[start] === val) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      end--;
      len--;
    } else {
      start++;
    }
  }

  return len;
};
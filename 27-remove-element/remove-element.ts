function removeElement(nums: number[], val: number): number {
  // fast slow pointer
  // time O(n)
  // space O(1)
  // let slow = 0;
  // let fast = 0;
  // while (fast < nums.length) {
  //   if (nums[fast] === val) {
  //     fast++;
  //   } else {
  //     [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
  //     slow++;
  //     fast++;
  //   }
  // }
  // return slow;

  // two pointer shrinking
  // time O(n)
  // space O(1)
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    if (nums[start] === val) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      end--;
    } else {
      start++;
    }
  }

  return end + 1;
};
function removeElement(nums: number[], val: number): number {
  let start: number = 0;
  let end: number = nums.length - 1;

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
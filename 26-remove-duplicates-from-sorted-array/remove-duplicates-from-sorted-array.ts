function removeDuplicates(nums: number[]): number {
  // two pointer
  // time O(n)
  // space O(1)
  let writer = 1;

  for (let i = 1; i < nums.length; i++) {
    let prev = nums[i - 1];
    let curr = nums[i];

    if (prev === curr) {
      // do nothing
    } else {
      nums[writer] = curr;
      writer++;
    }
  }

  return writer;
};
function removeDuplicates(nums: number[]): number {
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
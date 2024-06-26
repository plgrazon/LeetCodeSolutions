function majorityElement(nums: number[]): number {
  // hash table
  // time O(n)
  // space O(n)
  const hash: { [key: string]: number } = {};
  let max = 0;
  let num = nums[0];

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    if (hash[curr]) {
      hash[curr] += 1;
    } else {
      hash[curr] = 1;
    }

    if (hash[curr] > max) {
      max = hash[curr];
      num = curr;
    }
  }

  return num;
};
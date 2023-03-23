function singleNumber(nums: number[]): number {
  let acc = 0;

  for (let num of nums) {
    acc ^= num;
  }

  return acc;
};
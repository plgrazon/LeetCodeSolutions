function singleNumber(nums: number[]): number {
  let acc = 0;

  for (let num of nums) {
    acc ^= num;
  }

  return acc;
}

function singleNumberHash(nums: number[]): number {
  let hash = {};

  for (let num of nums) {
    if (hash?.[num]) hash[num]++;
    else hash[num] = 1;
  }

  for (let key in hash) {
    if (hash[key] === 1) return Number(key);
  }

  return 1;
};
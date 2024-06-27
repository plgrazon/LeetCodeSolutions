/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // solution 1:
  // time O(n * k) => O(n)
  // space O(1)
  // this times out
  // for (let i = 0; i < k; i++) {
  //   let end = nums[nums.length - 1];
  //   for (let j = 0; j < nums.length; j++) {
  //     let temp = nums[j];
  //     nums[j] = end;
  //     end = temp;
  //   }
  // }

  // solution 2:
  // time O(n)
  // space O(n);
  // const arrCopy = [...nums];
  // for (let i = 0; i < arrCopy.length; i++) {
  //   let writeIdx = (i + k) % arrCopy.length;
  //   nums[writeIdx] = arrCopy[i];
  // }

  // solution 3:
  // time O(n)
  // space O(1);
  k %= nums.length;
  // whole array
  let end = nums.length;
  let start = 0;
  while (start < end) {
    [nums[start], nums[end - 1]] = [nums[end - 1], nums[start]];
    start++;
    end--;
  }

  end = k;
  start = 0;
  while (start < end) {
    [nums[start], nums[end - 1]] = [nums[end - 1], nums[start]];
    start++;
    end--;
  }
  end = nums.length;
  start = k;
  while (start < end) {
    [nums[start], nums[end - 1]] = [nums[end - 1], nums[start]];
    start++;
    end--;
  }
};
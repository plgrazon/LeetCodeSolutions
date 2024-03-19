/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = 0;
  let p2 = 0;

  const nums1copy = nums1.slice(0, m);

  for (let i = 0; i < nums1.length; i++) {
    if (p2 >= n || p1 < m && nums1copy[p1] <= nums2[p2]) {
      nums1[i] = nums1copy[p1++];
    } else {
      nums1[i] = nums2[p2++];
    }
  }
};
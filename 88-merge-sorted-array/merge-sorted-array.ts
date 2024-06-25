/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const nums1copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < nums1.length; i++) {
    if (p1 < m && p2 < n) {
      if (nums1copy[p1] <= nums2[p2]) {
        nums1[i] = nums1copy[p1];
        p1++
      } else {
        nums1[i] = nums2[p2];
        p2++;
      }
    } else if (p1 < m) {
      nums1[i] = nums1copy[p1];
      p1++
    } else {
      nums1[i] = nums2[p2];
      p2++
    }
  }
};
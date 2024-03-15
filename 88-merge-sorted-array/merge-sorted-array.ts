/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let writer = m + n - 1; writer >= 0; writer--) {
    if (p2 < 0) break;
    
    if (nums1[p1] >= nums2[p2]) {
      nums1[writer] = nums1[p1];
      p1--;
    } else {
      nums1[writer] = nums2[p2];
      p2--;
    }
  }
};
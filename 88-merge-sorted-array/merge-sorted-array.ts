/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // start to end:
  // time: O(n)
  // space: O(n)
  // let p1 = 0;
  // let p2 = 0;

  // const nums1copy = nums1.slice(0, m);

  // for (let i = 0; i < nums1.length; i++) {
  //   if (p2 >= n || p1 < m && nums1copy[p1] <= nums2[p2]) {
  //     nums1[i] = nums1copy[p1++];
  //   } else {
  //     nums1[i] = nums2[p2++];
  //   }
  // }
  //
  // end to start:
  // time: O(n)
  // space: O(1)
  let p1 = m - 1;
  let p2 = n - 1;

  for (let writer = nums1.length - 1; writer >= 0; writer--) {
    if (p2 < 0) return;

    if (p1 >= 0 && nums1[p1] >= nums2[p2]) {
      nums1[writer] = nums1[p1--];
    } else {
      nums1[writer] = nums2[p2--];
    }
  }
};
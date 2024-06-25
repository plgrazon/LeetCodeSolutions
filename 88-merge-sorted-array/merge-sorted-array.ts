/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // two pointers start to end
  // time: O(n)
  // space: O(n)
  // const nums1copy = nums1.slice(0, m);
  // let p1 = 0;
  // let p2 = 0;
  // for (let i = 0; i < nums1.length; i++) {
  //   if (p1 < m && p2 < n)) {
  //     if (nums1copy[p1] <= nums2[p2]) {
  //       nums1[i] = nums1copy[p1];
  //       p1++
  //     } else {
  //       nums1[i] = nums2[p2];
  //       p2++;
  //     }
  //   } else if (p1 < m) {
  //     nums1[i] = nums1copy[p1];
  //     p1++
  //   } else {
  //     nums1[i] = nums2[p2];
  //     p2++
  //   }
  // }

  // two pointers start to end
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (p1 >= 0 && p2 >= 0) {
      if (nums1[p1] >= nums2[p2]) {
        nums1[i] = nums1[p1--];
      } else {
        nums1[i] = nums2[p2--];
      }
    } else if (p1 >= 0) {
      nums1[i] = nums1[p1--]
    } else {
      nums1[i] = nums2[p2--];
    }
  }
};
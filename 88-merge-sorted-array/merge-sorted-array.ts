/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = 0;
  let p2 = 0;

  let nums1copy = nums1.slice(0, m);

  for (let writer = 0; writer < nums1.length; writer++) {  
    if (p2 >= n || p1 < m && nums1copy[p1] < nums2[p2]) {
      console.log(nums1copy[p1], nums2[p2])
      nums1[writer] = nums1copy[p1];
      p1++;
    } else {
      nums1[writer] = nums2[p2];
      p2++;
    }
  }
};
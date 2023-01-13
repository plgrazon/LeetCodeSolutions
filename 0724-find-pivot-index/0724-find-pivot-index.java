class Solution {
    public int pivotIndex(int[] nums) {
        int totalSum = 0;
        int sumLeft = 0;
      
        for (int num: nums) {
          totalSum += num;
        }
      
        for (int i = 0; i < nums.length; i++) {
            int sumRight = totalSum - sumLeft - nums[i];

            if (sumLeft == sumRight) {
                return i;
            } else {
                sumLeft += nums[i];
            }
        }

        System.out.println(totalSum);

        return -1;
    }
}
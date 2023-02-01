/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let operations = 0;

    if (nums.length === 1) return operations;

    for (let i = 0; i < nums.length - 1; i++) {
        let prevNum = nums[i];
        let nextNum = nums[i + 1];

        if (nextNum <= prevNum) {
            let diff = prevNum - nextNum + 1;
            nums[i + 1] += diff;
            operations += diff;
        }
    }

    return operations;
}

var minOperationsLoop = function(nums) {
    let operations = 0;

    if (nums.length === 1) return operations;

    for (let i = 0; i < nums.length - 1; i++) {
        let prevNum = nums[i];
        let nextNum = nums[i + 1];

        while (nextNum <= prevNum) {
            nextNum++;
            operations++;
        }

        nums[i + 1] = nextNum;
    }

    return operations;
};
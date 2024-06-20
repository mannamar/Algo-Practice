// 75. Sort Colors
// https://leetcode.com/problems/sort-colors/


var sortColors = function(nums) {
    // Iterate over array once per value
    for (let i = 0; i < nums.length - 1; i++) {
        // Each iteration, iterate over entire array (can stop one short each time)
        for (let j = 0; j < nums.length - 1 - i; j++) {
            let num = nums[j];
            let next = nums[j+1];
            // For each num, compare it to the next
            // If num is greater than next, then swap them
            if (num > next) {
                nums[j] = next;
                nums[j+1] = num;
            }
        }
    }
    return nums;
};


// NOTES
// Bubble sort!
// Runtime is O(n^2)
    // Not very efficient for time
    // Faster sorting algos are O(n*log(n)) runtime
// BUT
    // Big O is a measure of "worst case" runtime
    // Bubble sort can be useful in situations where array is already mostly sorted
    // Best case runtime is Ω(n)
    // Code needs to be refactored to benefit
        // Count swaps, if swaps are zero for an iteration, exit function
// Memory is O(1)
    // In-place sorting requires no extra memory
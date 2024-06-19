// 704. Binary Search
// https://leetcode.com/problems/binary-search/description/


var search = function(nums, target) {
    // Initialize pointers
    let left = 0;
    let right = nums.length - 1;

    // While left is less than or equal to right
    while (left <= right) {
        // Calculate midpoint
        let mid = Math.floor((left+right)/2);
        // If mid value equals target
        if(nums[mid] === target) {
            // Return index
            return mid;
        }

        // If mid value is larger than target
        if (nums[mid] > target) {
            // Set new right pointer
            right = mid - 1;
        } else {
            // Set new left pointer
            left = mid + 1;
        }
    } 
    return -1;
};


// NOTES
// Brute force approach is to use a standard for loop
    // Checks all numbers in the array
    // Runtime O(n)
    // Memory O(1)
// Binary search checks against half the array each iteration
    // Runtime O(log(n))
    // 2^x = n where x is the number of checks needed
    // Only works on sorted arrays
    // Memory is still O(1)
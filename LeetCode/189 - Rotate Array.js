// 189. Rotate Array
// https://leetcode.com/problems/rotate-array/


// Naive solution
var rotate = function(nums, k) {
    // Initialize new array
    let res = [];

    // Iterate over input
    for (let i = 0; i < nums.length; i++) {
        // Calculate new index
        let newIndex = (i + k) % nums.length;
        res[newIndex] = nums[i];
    }
    
    // Overwrite nums with res
    for (let i = 0; i < nums.length; i++) {
        nums[i] = res[i];
    }
};

// Naive solution uses an intermediate array
    // Not really done "in-place"
    // O(n) memory and O(n) runtime
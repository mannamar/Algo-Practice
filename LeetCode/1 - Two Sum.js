// 1. Two Sum
// https://leetcode.com/problems/two-sum/


// Naive Solution
var twoSum = function(nums, target) {
    // Iterate over nums
    for (let i = 0; i < nums.length; i++) {
        // Get value of num1
        let num1 = nums[i];
        // For each value, iterate over the rest of the array
        for (let j = i + 1; j < nums.length; j++) {
            // Get value of num2
            let num2 = nums[j];
            // If the two nums sum to the target
                // Return their indexes
            if ((num1 + num2) === target) {
                return [i, j];
            }
        }
    }
};


// Optimal Solution
var twoSum = function(nums, target) {
    // Create hash to store previous nums and their index
    let hash = {}; // {num: index}
    // Iterate over nums
    for (let i = 0; i < nums.length; i++) {
        // Calculate difference
        // If the difference is already in the hash table
            // Return the index of the two nums
        // Else
            // Add current {num: index} pair to our hash
        let diff = target - nums[i];
        if (hash[diff] !== undefined) {
            return [hash[diff], i];
        } else {
            hash[nums[i]] = i;
        }
    }
};


// NOTES
// Naive solution is O(n^2) time and O(1) time
// Optimal solution is O(n) time and O(n) time
// Time optimization is almost always preferred
    // Avoid nested for loops when possible
    // Use hashmap to keep track of previous values
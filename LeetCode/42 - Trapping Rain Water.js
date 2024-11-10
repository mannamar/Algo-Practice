// 42. Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/

// WIP Solution
var trap = function(height) {
    // Initialize variables
    let left = 0;
    let right = 1;
    let leftHeight = height[0];
    let total = 0;

    // While starting pointer has not reached end
    while (left < height.length) {
        // While value at end is less than or equal value at start
        while (height[right] < height[left]) {
            right++;
            // If end goes out of bounds
            if (right === height.length) {
                left++;
                leftHeight = height[left];
                right = left + 1;
            }
        }
        // While start is less than end
        while (left < right) {
            let water = leftHeight - height[left];
            if (water > 0) {
                total += water;
            }
            left++;
        }
        leftHeight = height[left];
        right++;
    }
    return total;
};

// Passes first 145 test cases
// Fails on test case 146: [4,2,3]
    // Not currently accounting properly for right height
    // Currently making the assumption there can not be water trapped when right walls are lower than current wall
    // Likely need to set right pointer to end and work towards the middle

// Time complexity
    // Brute force is o(n^2)
    // Best case O(n) via two pointer

// Space complexity
    // Naive solution uses O(n) space
    // Best case of O(1) is possible
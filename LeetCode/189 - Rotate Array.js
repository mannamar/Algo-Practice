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


// Optimized solution
var rotate = function(nums, k) {
    // Reduce shift count if longer than nums array
    let k = k % nums.length;
    // Reverse entire array
    reverse(nums, 0, nums.length - 1);
    // Reverse first k nums
    reverse(nums, 0, k - 1);
    // Reverse res of the array
    reverse(nums, k, nums.length - 1);
};

// Helper function for reversing
function reverse(arr, start, end) {
    for (let i = start; i < (start + end) / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[end - i + start];
        arr[end - i + start] = temp;
    }
}

// Still O(n) runtime
// O(1) memory
    // True in-place solution
// Would be very hard to come up with from scratch
    // But easy to implement once you know the underlying idea


// Alternative helper functions
    // Set both variables at once via destructuring
    function reverse2(arr, start, end) {
        for (let i = start; i < (start + end) / 2; i++) {
            [arr[i], arr[end - i + start]] = [arr[end - i + start], arr[i]];
        }
    }
    // Use two pointers (easiest to follow)
    function reverse3(arr, start, end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
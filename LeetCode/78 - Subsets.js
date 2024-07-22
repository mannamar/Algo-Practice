// 78. Subsets
// https://leetcode.com/problems/subsets


var subsets = function(nums) {
    let res = [];
    getSubsets(0, []);
    return res;

    function getSubsets(i, arr) {
        // Base case
        // Once you hit last index
            // Add subset to array
        if (i >= nums.length) {
            res.push(arr);
            return;
        }
        
        // Skip current number
        getSubsets(i + 1, arr);
        // Add current number
        getSubsets(i + 1, [...arr, nums[i]]);
    }
};


// NOTES
// Draw tree to help you visualize
// O(2^n) runtime
    // Every num branches to include/skip the next num
// Memory? Is using a copy less efficient than backtracking?
// DFS recursive solution
    // Other solutions possible but would be similar runtime

//          _
//         / \
//        _   1
//       / \ / \
//      _  2 1 1,2


                
// Backtracking solution
var subsets = function(nums) {
    let res = [];
    getSubsets(0, []);
    return res;

    function getSubsets(i, arr) {
        if (i >= nums.length) {
            res.push(arr.slice());
            return;
        }

        getSubsets(i + 1, arr)
        arr.push(nums[i]);
        getSubsets(i + 1, arr);
        arr.pop()  // Backtrack (to previous descision node)
    }
};

// Backtracking has less memory overhead
    // Single solution array (arr) used throughout callstack
// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/description/

var containsDuplicate = function(nums) {
    let counts = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (counts[num]) {
            return true;
        } else {
            counts[num] = 1;
        }
    }
    return false;
};

// Solved but not optimal
    // Speed and space may both be improved via a set
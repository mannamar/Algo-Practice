// 15. 3Sum
// https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        let k = 0 - nums[i];
        // let otherNums = nums.slice(0, i).concat(nums.slice(i+1));
        let otherNums = nums.slice(i + 1);
        let twoSums = twoSum(otherNums, k);
        // console.log(twoSums)
        for (let pair of twoSums) {
            res.push([nums[i], pair[0], pair[1]]);
        }
    }

    return res;

    // console.log(twoSum([1,2,3,4,5] , 5))
    
    function twoSum(arr, k) {
        let res = [];
        let hash = {}
        let checked = new Set();
        for (let i = 0; i < arr.length; i++) {
            let diff = k - arr[i];
            if (hash[diff] === undefined) {
                hash[arr[i]] = diff;
            } else if(!checked.has(arr[i])) {
                res.push([arr[i], diff])
                checked.add(arr[i]);
            }
        }
        return res;
    }
};

// Solved but slow
// Is sorting array absolutely necessary?
    // For now needed to avoid dupes
    // Maybe use a set to keep track instead?
// Time Comlexity?
    // Initial sort is O(n * log(n))
    // O(n^2) for finding the ThreeSums
    // Overall O((n * log(n)) + n^2)
        // Reduces down to O(n^2)
// 46. Permutations
// https://leetcode.com/problems/permutations/


// Iterative solution
var permute = function(nums) {
    // Initialize with empty permutation
    let perms = [[]];

    // For each number in our input
    for (let num of nums) {
        // Create a new empty array
        let newPerms = [];
        // For each existing permutation
        for (let p of perms) {
            // Iterate at every postion of the the permutation (including the end)
            for (let i = 0; i <= p.length; i++) {
                // Inset the new number
                let newPerm = [
                    ...p.slice(0, i),
                    num,
                    ...p.slice(i)

                ]
                // Add the permutation to our new array
                newPerms.push(newPerm);
            }
        }
        // Set result to our new array
        perms = newPerms;
    }
    
    return perms;
};


// Should be exactly n! solutions
    // Runtime will be O(n!)
    // Memory may be higher than O(n!) in this solution
        // Possibly push directly to newPerms and avoid intializing intermediates
        // Rcursive backtracking solution may also use less meory
// 100. Same Tree
// https://leetcode.com/problems/same-tree/

var isSameTree = function(p, q) {
    // Base cases
    // If both nodes are empty
    if (!p && !q) {
        // Then nodes are identical
        return true;
    }

    // If only one of them is empty or their values are different
    if (!p || !q || p.val !== q.val) {
        // Then nodes are unique
        return false;
    }

    // Check if left and right nodes are the same
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// NOTES
// Recursive DFS solution
// O(n) runtime and O(n) memory
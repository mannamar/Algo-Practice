// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/


var maxDepth = function(root) {
    // Base case
    if (!root) {
        return 0;
    }

    // Calc depth of left and right nodes
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    // Return height of root node
    return 1 + Math.max(right, left);
};


// NOTES
// Recursive DFS
// O(n) time
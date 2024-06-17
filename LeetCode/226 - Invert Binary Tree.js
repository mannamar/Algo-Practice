// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/

var invertTree = function(root) {
    // Base case
    // If root node is null
        // Return root node
    if (root === null) {
        return root;
    }
    
    // Swap left and right nodes
    let left = root.left;
    let right = root.right;
    root.left = right;
    root.right = left;

    // Invert the left and right nodes
    invertTree(root.left);
    invertTree(root.right);

    // Return root node
    return root;
};

// NOTES
// O(n) time complexity
    // Each node is visited exactly once
// DFS - Depth first search
    // Tree is traversed to longest branch first
// Space complexity?
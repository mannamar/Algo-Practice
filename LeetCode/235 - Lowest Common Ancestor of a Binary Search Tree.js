// 235. Lowest Common Ancestor of a Binary Search Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/


// Iterative Approach
var lowestCommonAncestor = function(root, p, q) {
    // While node exists
    while (root) {
        // Check if p and q are both less than current node
        if ( p.val < root.val && q.val < root.val ) {
            // Move down left node
            root = root.left;
        // Check if p and q are both larger than current node
        } else if ( p.val > root.val && q.val > root.val ) {
            // Move down right node
            root = root.right;
        // Else p and q diverge
        } else {
            // Return LCA
            return root;
        }
    }
};


// Recursive Approach
var lowestCommonAncestor = function(root, p, q) {
    // Base case
    // Check if nodes diverge
    if ((p.val >= root.val && q.val <= root.val) || (p.val <= root.val && q.val >= root.val)) {
        return root;
    }

    // Check if both p an q are greater than current node
    if (p.val > root.val && q.val > root.val) {
        // Get LCA from right node
        return lowestCommonAncestor(root.right, p, q);
    // Else both p and q are less than current node
    } else {
        // Get LCA from left node
        return lowestCommonAncestor(root.left, p, q);
    }
};
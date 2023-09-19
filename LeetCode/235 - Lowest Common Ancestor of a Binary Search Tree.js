// 235. Lowest Common Ancestor of a Binary Search Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

var lowestCommonAncestor = function(root, p, q) {

    // Figure out proper stop condition
    while (true) {
        if ( p.val < root.val && q.val < root.val ) {
            root = root.left;
        } else if ( p.val > root.val && q.val > root.val ) {
            root = root.right;
        } else {
            return root
        }
    }

};
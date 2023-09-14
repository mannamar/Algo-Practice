// 110. Balanced Binary Tree
// https://leetcode.com/problems/balanced-binary-tree/submissions/

var isBalanced = function(root) {
    // If root is empty then it's balanced
    if (!root) {
        return true;
    }

    // Calc height of root
    height = calcHeight(root);

    // If the height is not -1 then it is balanced
    return height !== -1;
};

function calcHeight(node) {
    // If node is empty the height is 0
    if (!node) {
        return 0;
    }
    // Calc hegiht of left and right nodes
    let heightLeft = calcHeight(node.left);
    let heightRight = calcHeight(node.right);
    // If left node, right node, or current node is unbalanced
        // Return -1 (Represents unbalanced height)
    if (heightLeft === -1 || heightRight === -1 || Math.abs(heightLeft - heightRight) > 1) {
        return -1
    }
    // Else return 1 plus the larger of the left and right heights
    return 1 + Math.max(heightLeft, heightRight);
}

// Need to write tests
// This is now O(n) time
    // Depth first
    // Remember how to do naive solution at O(n^2) time
        // Single recursion versus double recursion
        // Bottom up versus top down
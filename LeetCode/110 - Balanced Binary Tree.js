// 110. Balanced Binary Tree
// https://leetcode.com/problems/balanced-binary-tree/submissions/

var isBalanced = function(root) {
    // If root is empty then it's balanced
    if (!root) {
        return true;
    }
    // Calc height of root and return the balanced property
    return calcHeight(root).balanced;
};

function calcHeight(node) {
    // If node is empty the node is balanced and the height is 0
    if (!node) {
        return  {'balanced': true, 'height': 0};
    }
    // Calc height of left and right nodes
    let heightLeft = calcHeight(node.left);
    let heightRight = calcHeight(node.right);
    // If left node, right node, or current node is unbalanced
        // Return that the node is unbalanced, height is not needed
    if (!left.balanced || !right.balanced || Math.abs(left.height - right. height) > 1) {
        return {'balanced': false, 'height': undefined};
    }
    // Else return the node is balanced and its height
    return {'balanced': true, 'height': 1 + Math.max(left.height, right.height)};
}

// Need to write tests
// This is now O(n) time
    // Depth first
    // Remember how to do naive solution at O(n^2) time
        // Single recursion versus double recursion
        // Bottom up versus top down
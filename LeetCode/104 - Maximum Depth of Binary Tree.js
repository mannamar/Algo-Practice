// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/balanced-binary-tree/submissions/

var isBalanced = function(root) {
    // If root node is empty then tree is balanced
    if (!root) {
        return true;
    }
    // Calc max heights of left and right nodes
    let leftHeight = calcMaxHeight(root.left);
    let rightHeight = calcMaxHeight(root.right);
    // If difference in max height of left and right nodes is greater than one
    // Or if either the left or right nodes is itself unbalanced
        // Return false
    if ( (Math.abs(leftHeight - rightHeight) > 1) || !isBalanced(root.left) || !isBalanced(root.right)) {
        return false;
    } else {
        return true;
    }
};

function calcMaxHeight(node) {
    // If node is empty, height is 0
    if (!node) {
        return 0;
    // If left and right nodes are both empty, height is 1
    } else if (!node.left && !node.right) {
        return 1;
    }
    // Otherwise the height is 1 plus the max between the left and right nodes
    return 1 + Math.max( calcMaxHeight(node.left) , calcMaxHeight(node.right) )
}

// Need to write tests
// This is a naive solution
    // What is the current time complexity?
    // How can it be made mroe efficient?
        // Breadth first vs depth first?
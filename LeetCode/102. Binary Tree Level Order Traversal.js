// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/

var levelOrder = function(root) {
    // Instantiate result
    let res = [];
    // Call helper function on root node and index of 0
    getVals(root, 0);
    // Return result
    return res;

    // Helper function to populate result
    function getVals(node, index) {
        // If node is empty
            // Return (do nothing)
        if (!node) {
            return;
        }
        // If result array at given index is empty
            // Create a new array containing soley the value at the current node
            // Insert that new array at the given index of the result array
        // Else
            // Push the value to the array at the given index of the result array
        if (!res[index]) {
            res[index] = [node.val];
        } else {
            res[index].push(node.val);
        }
        // Recursively call the helper function on the left and right nodes from the current node
            // Increment the previous index and pass it through as the new index
        getVals(node.left, index + 1);
        getVals(node.right, index + 1);
    }
};
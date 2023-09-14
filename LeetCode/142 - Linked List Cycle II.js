// 142. Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle/description/

var hasCycle = function(head) {
    // Create hash
    let chain = [];
    // While node exists
    while (head) {
        // If hash includes current node
            // We're in a loop
        if (chain.includes(head)) {
            return true;
        // Otherwise add current node to hash
        } else {
            chain.push(head);
        }
        // Set current node to next node
        head = head.next;
    }
    return false;
};

// Naive solution running at O(n^2) time
    // Array.includes has O(n) time complexity
    // Set.has() has a O(1) time complexity
    // Implementing a Set instead of an Array for the hash will reduce overall time complexity to O(n)
    // Also possible to acheive O(n) time complexity using turtle-and-hare approach
        // Two pointers at two speeds
            // If pointers ever meet then loop exists
        // Has lower space complexity of O(1)
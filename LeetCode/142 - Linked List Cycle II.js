// 142. Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle/description/

var hasCycle = function(head) {
    let chain = [];
    while (head) {
        if (chain.includes(head)) {
            return true;
        } else {
            chain.push(head);
        }
        head = head.next;
    }
    return false;
};

// Naive solution running at O(n^2) time
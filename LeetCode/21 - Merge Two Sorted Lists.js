// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/


var mergeTwoLists = function(node1, node2) {
    // Initialize new node
    let res = new ListNode();
    // Set result as reference to head of result list
    let result = res;
    // While both node1 and node2 exist
    while (node1 && node2) {
        // If the value at node1 is less than or equal to the value at node2
        if (node1.val <= node2.val) {
            // Attatch node1 to the end of the result list
            res.next = node1;
            // Increment node1
            node1 = node1.next;
        // Else
        } else {
            // Attatch node2 to the end of result list
            res.next = node2;
            // Increment node2
            node2 = node2.next;
        }
        // Increment result list
        res = res.next;
    }
    // Attatch remaining node to end of result list
    res.next = node1 ?? node2;
    // Return initial head of result list
    return result.next;
};
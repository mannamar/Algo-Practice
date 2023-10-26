// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/


var mergeTwoLists = function(node1, node2) {
    let res = new ListNode();
    let result = res;
    while (node1 && node2) {
        if (node1.val <= node2.val) {
            res.next = node1;
            node1 = node1.next;
        } else {
            res.next = node2;
            node2 = node2.next;
        }
        res = res.next;
    }
    res.next = node1 ?? node2;
    return result.next;
};
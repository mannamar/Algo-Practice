// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/


var mergeTwoLists = function(list1, list2) {
    let res = new ListNode();
    let resIdx = res;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            resIdx.next = new ListNode(list1.val);
            console.log(res)
            list1 = list1.next;
        } else {
            resIdx.next = new ListNode(list2.val);
            list2 = list2.next
        }
        resIdx = resIdx.next;
    }
    if (list1) {
        while (list1) {
            resIdx.next = new ListNode(list1.val);
            list1 = list1.next;
            resIdx = resIdx.next;
        }
    } else {
        while (list2) {
            resIdx.next = new ListNode(list2.val);
            list2 = list2.next;
            resIdx = resIdx.next;
        }
    }
    return res.next;
};
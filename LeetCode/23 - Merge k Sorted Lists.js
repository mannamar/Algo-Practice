// 23. Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/description/

var mergeKLists = function(lists) {
    let result = new ListNode();
    let node = result;

    while (lists.length > 0) {
        let min = undefined;
        let target = 0;
        for (let i = 0; i < lists.length; i++) {
            if (!lists[i]) {
                lists.splice(i, 1);
                i--;
                continue;
            }
            // console.log(i, lists[i])
            if (min === undefined || lists[i].val < min) {
                min = lists[i].val
                target = i;
            }
        }
        if (min === undefined) {
            break;
        }
        node.next = new ListNode(min);
        node = node.next;
        lists[target] = lists[target].next;
        if (!lists[target]) {
            lists.splice(target, 1);
        }
    }

    return result.next;
};

// TO DO
// Time complexity?
// Pseudocode
// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/


// Two sweep approach
var reverseList = function(head) {
    // If list is empty
        // Return list
    if (!head) {
        return head;
    }

    // Create empty values array
    let values = [];

    // While next node exists
    while (head.next) {
        // Add current value to values array
        values.push(head.val);
        // Move to next node
        head = head.next;
    }

    // Initalize result as final node
    let result = head;
    // While values array has values
    while (values.length > 0) {
        // Set next node to last value in array
        head.next = new ListNode(values.pop());
        // Move to next node
        head = head.next
    }
    return result; 
};


// Single sweep approach
var reverseList = function(head) {
    if (!head) {
        return head;
    }
    let prev = null;
    let curr = head;
    // While current node exists
    while (curr) {
        // Extract next node
        let next = curr.next;
        // Replace next node with previous node
        curr.next = prev;
        
        // For next iteration
        // Current node becomes previous node
        prev = curr;
        // Next node becomes current node
        curr = next;
    }
    return prev;
};
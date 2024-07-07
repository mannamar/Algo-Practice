// 1249. Minimum Remove to Make Valid Parentheses
// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/

var minRemoveToMakeValid = function(s) {
    // Declare variables
    let open = [];
    let close = [];
    let res = '';

    // Iterate over the string
    for (let i = 0; i < s.length; i++) {
        // If close paren
        if (s[i] === ')') {
            // Check if counterpart exists in open array
            if (open.length > 0) {
                // Remove counterpart
                open.pop();
            } else {
                // Add index to close array
                close.push(i);
            }
        // If open paren
        } else if (s[i] === '('){
            // Add index to open array
            open.push(i);
        }
    }
    
    // Use pointers to traverse open/close arrays
    let pointer1 = 0;
    let pointer2 = 0;

    // Iterate over string again
    for (let i = 0; i < s.length; i++) {
        // If i is in open array
        if (pointer1 < open.length && open[pointer1] === i) {
            // Increment pointer1 and skip
            pointer1++;
            continue;
        // if i is in close array
        } else if (pointer2 < close.length && close[pointer2] === i) {
            // Increment pointer2 and skip
            pointer2++;
            continue;
        } else {
            // Add char to result
            res += s[i];
        }
    }

    return res;
};

// NOTES
// O(2n) => O(n) runtime
    // Traverse string twice
// Use pointers instead of unshift()
    // Unshift is costly
    // unshift() => O(m)
    // pointer1++ => O(1)
// Where n is string length and m is number of parens
// O(n) memory
    // Worst case all char indexes are stored in open/close
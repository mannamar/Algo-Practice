// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/


// Decalre paren pairs
let parens = {
    '(': ')',
    '{': '}',
    '[': ']'
}

var isValid = function(s) {
    // If string length is odd, we know parens won't match up
    if (s.length % 2 !== 0) {
        return false;
    }

    // Declare empty stack
    let stack = [];

    // Iterate over string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        // If current char is an opening paren
        if (char in parens) {
            // Add it to stack
            stack.push(char);
        // Else if current char is not the counterpart to the last paren
        } else if (char !== parens[stack.pop()]) {
            return false;
        }
    }
    
    // If stack is empty, then parens were all valid
    return stack.length === 0;
};
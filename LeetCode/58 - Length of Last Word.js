// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/


var lengthOfLastWord = function(s) {
    // Initialize result
    let length = 0;

    // Iterate over string starting with the last letter
    for (let i = s.length - 1; i >=0; i--) {
        // If current charachter is NOT a space
        if (s[i] !== ' ') {
            // Increment result by 1
            length++;
        // ELSE (i.e. current character is a space) if result is greater than zero
        } else if (length > 0) {
            // Break out of loop
            break;
        }
    }

    // Return result
    return length;
}


// Optimal solution starts at end of string
    // Naive and optimal are both O(n) due to worst-case
    // But optimal will generally be much faster for long strings
// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/


// Using for loop
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


// Using built-in methods
var lengthOfLastWord = function(s) {
    // Trim white space
    s = s.trim();

    // Get index of the last space
    let idxLastSpace = s.lastIndexOf(' ');

    // Return length of last word
    return s.length - 1 - idxLastSpace;
}


// NOTES
// Optimal solution starts at end of string
    // Naive solution iterates from start of string
    // Naive and optimal are both O(n) due to worst-case
    // But optimal will on average be much faster - especially for long strings
// When using built-in methods avoid using .split() if we don't need to traverse the entire string
    // Understand exactly what a built-in methods does when called
    // .split() will always traverse the entire string
    // .lastIndexOf(char) will start at the end and traverse until char is found
        // If given sane restraints for word length then .lastIndexOf(' ') runs at O(wordLength) => O(1) time
        // While .split(s) will always run at O(n) time
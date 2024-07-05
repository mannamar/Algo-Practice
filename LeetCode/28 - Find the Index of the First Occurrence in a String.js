// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/


var strStr = function(haystack, needle) {
    // Iterate over haystack
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        // Iterate over needle
        for (let j = 0; j < needle.length; j++) {
            // If chars not equal then break
            if (needle[j] !== haystack[i+j]) {
                break;
            }
            // If you make it to the end
                // Then return i (index of first char)
            if (j === needle.length - 1) {
                return i;
            }
        }
    }
    // If no match found
    return -1;
};


// NOTES
// Brute force method
// O(m*n) runtime
    // Worst case iterate over the entire haystack (n)
    // Then iterate over entire needle for each letter of haystack (m)
// O(1) memory
// Runtime can likely be optimized
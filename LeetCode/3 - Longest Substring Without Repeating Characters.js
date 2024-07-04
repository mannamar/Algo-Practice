// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    // Initialize variables
    let left = 0;
    let right = 0;
    let chars = new Set();
    let max = 0;

    // While right pointer is in bounds of string
    while (right < s.length) {
        // While set contains right char
        while (chars.has(s[right])) {
            // Remove left char from set
            // And increment left pointer
            chars.delete(s[left]);
            left++;
        }
        chars.add(s[right]);
        // Calc length of substring
        let len = right - left + 1;
        // Check if length is greater than max
        if (len > max) {
            max = len;
        }
        // Increment right pointer
        right++;
    }
    return max;
};

// NOTES
// Sliding window algorithm (two pointers)
// O(n) runtime
    // Max two passes over string, once for each pointer
// O(n) memory
    // Set may need to store each char of string
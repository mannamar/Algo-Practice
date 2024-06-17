// 424. Longest Repeating Character Replacement
// https://leetcode.com/problems/longest-repeating-character-replacement/

var characterReplacement = function(s, k) {
    // Initialize pointers
    let left = 0;
    let right = 0;
    // Intialize variables
    let max = 0;
    let counts = {};

    // While right pointer is within bounds of string
    while (right < s.length) {
        // Add right char to counts
        let char = s[right];
        if (counts[char] !== undefined) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
        // Get max value from counts
        let maxCount = Math.max(...Object.values(counts));
        // While maxCount + replacements is less than the current substring length
        while(maxCount + k < right - left + 1) {
            // Remove left char from counts
            counts[s[left]]--;
            // Incrmeent left pointer
            left++;
            // Find new maxCount
            maxCount = Math.max(...Object.values(counts));
        }
        // If current substring length is larger than max
        if (right - left + 1 > max) {
            // Set max to substring length
            max = right - left + 1;
        }
        // Increment right pointer
        right++;
    }
    // Return max value
    return max;
};

// Notes
// O(n) time complexity
    // Sliding window eliminates repated work
    // Brute force aproach would be O(n^2) time
// Still room for efficiencies
    // Built-in method for calculating max count is very slow
        // Custom function would be slightly faster
    // Alternatively we can keep track of maxCount from the start
        // Compare count of next char against maxCount
        // Would never need to iterate over counts hash
// Space complexity is O(1)
    // Since there are max 26 different chars
    // Space needed is constant for the counts hash
    // And constant for the pointers and initial variables

// Custom getMaxCount function
function getMaxCount(counts) {
    let max = 0;
    for (let char in counts) {
        let count = counts[char];
        if (count > max) {
            max = count;
        }
    }
    return max;
}
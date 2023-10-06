// 343. Integer Break
// https://leetcode.com/problems/integer-break/


// Trick is to maximize 3's, then 2's, and avoid 1's completely 
var integerBreak = function(n) {
    // For numbers less than or equal to 3 return n-1
    if (n <= 3) {
        return n-1;
    }

    // Count how mant times 3 divides n
    let count = Math.trunc(n/3);

    // Get remainder
    let remainder = n % 3;

    // Initialize product
    let res = 3 ** count;

    // If remainder is 2, multiply with product
    if (remainder == 2) {
        res *= 2;
    // Else if remainder is 1, undo last 3 from product and make it a 4
    } else if (remainder == 1) {
        res = res * 4 / 3;
    }

    // Return result
    return res;
};


// NOTES
// O(1) time complexity for both time and space
// Difficulty is in understanding mathmatical logic
    // Any number n can be summed as (n-2) + 2
        // As long as n-2 is not 1
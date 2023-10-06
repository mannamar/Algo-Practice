// 343. Integer Break
// https://leetcode.com/problems/integer-break/

// Trick is to maximize 3's, then 2's
var integerBreak = function(n) {
    if (n <= 3) {
        return n-1;
    }
    let count = Math.trunc(n/3);
    let remainder = n % 3;

    let res = 3 ** count;
    if (remainder == 2) {
        res *= 2;
    } else if (remainder == 1) {
        res = res * 4 / 3;
    }
    return res;
};
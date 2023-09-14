// 278. First Bad Version
// https://leetcode.com/problems/first-bad-version/description/

var solution = function(isBadVersion) {

    return function(n) {
        let start = 1;
        let end = n;
        while (start < end) {
            let middle = Math.floor((start + end)/2);
            if (isBadVersion(middle)) {
                end = middle;
            } else {
                start = middle + 1;
            }
        }
        return start;
    };

};

// Solved with good speed and space
// Learn explanation for why new end is middle inclusive
    // But new start is middle exclsuive
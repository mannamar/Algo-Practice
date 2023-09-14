// 278. First Bad Version
// https://leetcode.com/problems/first-bad-version/description/

var solution = function(isBadVersion) {

    return function(n) {
        let hash = {};
        let start = 1;
        let end = n;
        if (end === 1) {
            return end;
        }
        // Come up with proper stop condition
        while (true) {
            let middle = Math.floor((start + end)/2);
            console.log(middle);
            let isMidBad = isBadVersion(middle);
            if (isMidBad) {
                if (hash[middle - 1] === false) {
                    return middle;
                }
                hash[middle] = isMidBad;
                end = middle - 1;
            } else {
                if (hash[middle + 1] === true) {
                    return middle + 1;
                }
                hash[middle] = isMidBad;
                start = middle + 1;
            }
        }
    };

};

// Solved with good speed
    // Space complexity is very poor O(n)
        // Should be solvable without hash table
        // Would reduce space to O(1)
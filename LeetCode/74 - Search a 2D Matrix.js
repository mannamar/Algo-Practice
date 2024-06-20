// 74. Search a 2D Matrix
// https://leetcode.com/problems/search-a-2d-matrix/


// Naive solution
var searchMatrix = function(matrix, target) {
    // Iterate over matrix
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        if (target <= row[row.length - 1]) {
            for (let j = 0; j < row.length; j++) {
                let val = row[j];
                // Check if each value equals target
                if (val === target) {
                    return true;
                }
            }
            return false;
        }
    }
    return false;
};


// Binary search
var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let top = 0;
    let bottom = rows - 1;
    let targetRow;

    while (top <= bottom) {
        if (target > matrix[mid][cols - 1]) {
            top = mid + 1;
        } else if (target < matrix[mid][0]) {
            bottom = mid - 1;
        } else {
            targetRow = mid;
            break;
        }
    }

    if (targetRow === undefined) {
        return false;
    }

    let left = 0;
    let right = cols - 1;
    let row = matrix[targetRow];

    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        if (row[mid] > target) {
            right = mid - 1;
        } else if (row[mid] < target) {
            left = mid + 1;
        } else {
            return true;
        }
    }

    return false;
};

// NOTES
// Oof. That took way too long
// Keep practicing
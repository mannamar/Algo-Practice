// 542. 01 Matrix
// https://leetcode.com/problems/01-matrix/


// Can NOT move diagonally in one step
    // Need to find new approach
    // Breadth First Search (BFS) ?
        // Start at zeroes (instead of 1's) and move outward


// New approach (WIP)
// Still likely not very efficient

var updateMatrix = function(mat) {
    // Copy matrix to result matrix
        // Replace 1's with new charachter ('?')
    // Set target to zero
    // While matrix contains ?'s
        // Iterate over column of result array
            // Iterate over rows
                // If value at cell equals target
                    // If adjacent cell is ?
                        // Set cell to target + 1
        // Incremenet target
    // Return result array
};


// Previous approach

var updateMatrix = function(mat) {
    // Create result matrix
    let res = mat.slice();
    // Iterate over columns
        // Iterate over rows
            // Find nearest zero (call findNearestZero)
            // Set returned value in result array
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            res[i][j] = findNearestZero(mat, i, j);
        }
    }
    // Return result array
    return res;
};

function findNearestZero(mat, m, n) {
    // Initialize counter
    // While 0 not found
        // Search counter spaces away for a 0
    // Return counter
    let counter = 0;
    while(true) {
        let starty = m
        let startx = n;
        for (let i = starty - counter; i <= starty + counter; i++) {
            for (let j = startx - counter; j <= startx + counter; j++) {
                if (i >= 0 && i < mat.length && j >= 0 && j < mat[0].length && mat[i][j] === 0) {
                    return counter;
                }
            }
        }
        counter++;
    }
}
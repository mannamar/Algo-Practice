// 542. 01 Matrix
// https://leetcode.com/problems/01-matrix/

// New approach - Using queue for efficency 

var updateMatrix = function(mat) {
    // Initialize empty queue array
    // Iterate over matrix
        // If value is zero add coordinates to queue
        // Else replace cell value with -1
    // While queue contains coords
        // Set current coords to first value from queue
        // Get value of current coords (initial neighbor value)
        // Create list of 4 adjacent coords
        // Iterate over list of 4 coords
            // Set new coords
            // If coords in matrix range AND value is -1
                // Set value to 1 + initial neighbor value
                // Push these new coords to the queue to check its neighbors
    // Return result array
};

// Breadth First Search (BFS)
    // Start at zeroes (instead of 1's) and move outward
    // Results in O(m*n) time complexity
        // Each cell of the matrix is only ever enqueued once
// Brain dead, code later



// Previous incorrect approach
// Diagonals DO NOT count as one step

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
// 542. 01 Matrix
// https://leetcode.com/problems/01-matrix/

// New approach - BFS plus using queue for efficency 

var updateMatrix = function(mat) {
    // Initialize empty queue
    let queue = [];

    // Iterate over matrix
        // If value is zero add coordinates to queue
        // Else replace cell value with -1
    for(let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                queue.push([i,j]);
            } else {
                mat[i][j] = -1;
            }
        }
    }

    // While queue contains coords
        // Set current coords to first value from queue
        // Get value of current coords (initial neighbor value)
        // Create list of 4 adjacent coords
        // Iterate over list of 4 coords
            // Set new coords
            // If coords in matrix range AND value is -1
                // Set value to 1 + initial neighbor value
                // Push these new coords to the queue to check its neighbors
    while (queue.length > 0) {
        let [row, col] = queue.shift();
        let val = mat[row][col];
        let coords = [ [row + 1, col] , [row, col + 1] , [row - 1, col] , [row, col - 1] ];
        for (let i = 0; i < coords.length; i++) {
            let [newRow, newCol] = coords[i];
            if (newRow >= 0 && newCol >= 0 && newRow < mat.length && newCol < mat[0].length && mat[newRow][newCol] === -1) {
                mat[newRow][newCol] = val + 1;
                queue.push([newRow, newCol]);
            }
        }
    }
    
    // Return result array
    return mat;
};

// Breadth First Search (BFS)
    // Start at zeroes (instead of 1's) and move outward
    // Queue so you only need to check next level and not entire matrix
    // Results in O(m*n) time complexity
        // Each cell of the matrix is only ever enqueued once




// Previous incorrect approach
    // Diagonals DO NOT count as one step
    // Also very inefficient

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
        // Increment counter
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
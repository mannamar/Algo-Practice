// Write a function that takes in a matrix (2D array) and returns the position of the 1. There is always a single 1 in the matrix and all other values are 0

// Example
// Matrix: [[0,0,0],[0,0,1],[0,0,0]]
// Return: [1,2]


// Solution
function findTheOne(matrix) {
    // Iterate over outer array
    for (let i = 0; i < matrix.length; i++) {
        // For each index of the outer array
        // Get the current row
        let row = matrix[i];
        // Iterate over the current row
        for (let j = 0; j < row.length; j++) {
            // Get the current value
            let val = row[j];
            // If current value is 1
            if (val === 1) {
                // Return the matrix index (row and column)
                return [i, j];
            }
        }
    }
}


// Condensed
function findTheOneAlt(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                return [i, j];
            }
        }
    }
}


// Basic testing function
function assert(testName, expected, result) {
    if (expected.join(',') === result.join(',')) {
        console.log(`${testName} has passed`)
    } else {
        console.log(`${testName} has failed. Expected: ${expected} Result: ${result}`);
    }
}


// Test cases
let test1Matrix = [[0,0,0],[0,0,1],[0,0,0]];
let test1Expected = [1,2];
assert('Test1', test1Expected, findTheOne(test1Matrix));

let test2Matrix = [[0,0,0,0,0],[0,0,0],[0,0,0,1]];
let test2Expected = [2,3];
assert('Test2', test1Expected, findTheOne(test1Matrix));

let test1AltMatrix = [[0,0,0],[0,0,1],[0,0,0]];
let test1AltExpected = [1,2];
assert('Test1Alt', test1Expected, findTheOneAlt(test1Matrix));

let test2AltMatrix = [[0,0,0,0,0],[0,0,0],[0,0,0,1]];
let test2AltExpected = [2,3];
assert('Test2Alt', test1Expected, findTheOneAlt(test1Matrix));
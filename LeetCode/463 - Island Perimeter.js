// 463. Island Perimeter
// https://leetcode.com/problems/island-perimeter/

var islandPerimeter = function(grid) {
    let perimeter = 0;
    // Iterate over grid
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            // If cell is land
            if (grid[row][col] === 1) {
                // Check each side
                perimeter += checkSide(row + 1, col);
                perimeter += checkSide(row, col + 1);
                perimeter += checkSide(row - 1, col);
                perimeter += checkSide(row, col - 1);
            }
        }
    }
    return perimeter;

    function checkSide(row, col) {
        // If cell is out of range or water
            // Return 1
        // Else
            // Return 0
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
            return 1;
        }
        if (grid[row][col] === 0) {
            return 1;
        }
        return 0;
    }
};

// O(m * n) time complexity
// O(1) space complexity
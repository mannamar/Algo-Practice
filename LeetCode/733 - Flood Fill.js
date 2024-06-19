// 733. Flood Fill
// https://leetcode.com/problems/flood-fill/description/


var floodFill = function(image, sr, sc, color) {
    let target = image[sr][sc];

    // Exit if already filled
    if (target === color) {
        return image;
    }

    // Fill target pixel
    fill(image, sr, sc, color, target);

    // Return filled image
    return image;
};


function fill(image, row, col, color, target) {
    // Exit if pixel is out of bounds
    if (row < 0 || col < 0 || row > image.length - 1 || col > image[0].length - 1) {
        return;
    }

    // Exit if pixel value is not equal to target
    if (image[row][col] !== target) {
        return;
    }

    // Color in pixel
    image[row][col] = color;

    // Fill adjacent pixels
    fill(image, row+1, col, color, target);
    fill(image, row-1, col, color, target);
    fill(image, row, col+1, color, target);
    fill(image, row, col-1, color, target);
}

// NOTES
// O(n) time complexity where n is total number of pixels
    // Sometimes written as O(m*n) where m and n are row/col length
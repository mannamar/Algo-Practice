// 973. K Closest Points to Origin
// https://leetcode.com/problems/k-closest-points-to-origin/

var kClosest = function(points, k) {
    let res = [ points[0] ];
    let distances = [ points[0][0] * points[0][0] + points[0][1] * points[0][1] ];

    for (let i = 1; i < points.length; i++) {
        let thisDist = points[i][0] * points[i][0] + points[i][1] * points[i][1];
        if (distances.length < k || distances[k-1] > thisDist) {
            let index = 0;
            for (let j = 0; j < distances.length; j++) {
                if (thisDist < distances[j]) {
                    break;
                } else {
                    index++;
                }
            }
            res.splice(index, 0, points[i]);
            distances.splice(index, 0, thisDist);
        }
        if (distances.length > k) {
            res.pop();
            distances.pop();
        }
    }
    
    return res;
};

// Very low time score on LeetCode
    // Increased efficinecy using heap?
    // Current time complexity seems like it'd be O(n * k)
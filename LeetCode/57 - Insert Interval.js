// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/description/

var insert = function(intervals, newInterval) {
    if (intervals.length < 1) {
        return [newInterval];
    }
    let start = newInterval[0];
    let end = newInterval[1];
    let i = 0;
    while (intervals[i] && start > intervals[i][1]) {
        i++;
    }
    if (intervals[i] && end < intervals[i][0]) {
        intervals.splice(i, 0, newInterval);
    }
    if (intervals[i] && start < intervals[i][0]) {
        intervals[i][0] = start;
    }
    if (intervals[i] && end > intervals[i][1]) {
        intervals[i][1] = end;
    }
    if (!intervals[i]) {
        intervals.push(newInterval);
    }
    while (intervals[i + 1] && end > intervals[i + 1][1]) {
        intervals.splice(i + 1, 1);
    }
    if (intervals[i + 1] && end >= intervals[i + 1][0]) {
        intervals.splice(i,2,[intervals[i][0],intervals[i + 1][1]])
    }
    return intervals;
};

// O(n) runtime is good
// Need to work on readability
    // Should have pseudocded this one
// Solution was highly dependent on small fixes via trial and error
    // Will not have that luxury in an interview
    // Likely overlooked simpler solution 
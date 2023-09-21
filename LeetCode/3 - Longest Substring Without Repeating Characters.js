// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }
    let start = -1;
    let end = 1;
    let longest = 1;

    while (end < s.length) {
        start++;
        if (end === start) {
            end++;
        }
        if (end >= s.length) {
            break;
        }
        console.log(s.slice(start,end) , (s[end]) )
        while(!s.slice(start,end).includes(s[end])) {
            end++;
            if (end > s.length) {
                break;
            }
        }
        let currLen = s.slice(start,end).length;
        if (currLen > longest) {
            longest = currLen;
        }
    }
    return longest;
};

// Solved but slow
// Used a lot of trial and error to catch edge cases
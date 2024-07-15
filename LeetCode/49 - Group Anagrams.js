// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/description/


var groupAnagrams = function(strs) {
    let map = new Map();
    for (let string of strs) {
        let count = getCounts(string);
        let words = map.get(count);
        if (words === undefined) {
            words = [string];
        } else {
            words.push(string);
        }
        map.set(count, words);
    }
    return Array.from(map.values());
};

function getCounts(string) {
    let counts = [];
    for (let char of string) {
        let charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
        if (counts[charCode] === undefined) {
            counts[charCode] = 1;
        } else {
            counts[charCode]++;
        }
    }
    return JSON.stringify(counts);
}


// Originally tried this method to get counts
// Even if contents of two objects are the same
    // They do not equal each other
    // Because they are not the same instance
        // Point to separate locations in memory
// Even if stringified won't work
    // Keys will not be in the same order
function getCountsAsObject(string) {
    let counts = {};
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (counts[char] === undefined) {
            counts[char] = 1;
        } else {
            counts[char]++
        }
    }
    return counts;
}


// NOTES
// Conceptually problem is pretty easy
// Implementation was difficult due to uniqueness of counts
// Runtime O(m * n) and Memory O(m)
    // Where m is word count and n is avg length of each word
// Add pseudocode!!!
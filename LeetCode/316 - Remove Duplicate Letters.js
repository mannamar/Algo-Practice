// 316. Remove Duplicate Letters
// https://leetcode.com/problems/remove-duplicate-letters


var removeDuplicateLetters = function(s) {

    // Create lastIndex hash
    let lastIndex = {}
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }

    // Instantiate stack for result
    let result = [];
    let added = new Set();

    // Iterate over string
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        // console.log(letter)
        // console.log(result[result.length - 1] > letter)
        if (added.has(letter)) {
            continue;
        }
        while (result[result.length - 1] > letter && lastIndex[result[result.length - 1]] > i) {
            added.delete(result.pop());
        }
        result.push(letter);
        added.add(letter);
        // console.log(result)
    }

    return result.join('');
};

// Solved but needs better pseudocode
// Also needed lots of trial and error
    // Sleep on on and retry
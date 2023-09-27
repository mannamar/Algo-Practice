// 316. Remove Duplicate Letters
// https://leetcode.com/problems/remove-duplicate-letters


// WIP - May not be possible to do via single loop
var removeDuplicateLetters = function(s) {
    let counts = {}
    for (let i = 0; i < s.length; i++) {
        console.log('\nindex:', i, s[i]);
        console.log('start:', s);
        if (counts[s[i]] !== undefined) {
            let oldIndex = counts[s[i]];
            let newIndex = i;
            let indexToRemove = newIndex;
            if (s[oldIndex] > s[oldIndex+1]) {
                indexToRemove = oldIndex;
                counts[s[i]] = i;
            }
            console.log('itr:', indexToRemove)
            s = s.slice(0, indexToRemove) + s.slice(indexToRemove+1);
            i--;
        } else {
            counts[s[i]] = i;
        }
        console.log('end:', s);
    }
    return s;
};
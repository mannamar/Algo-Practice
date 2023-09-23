// 2306. Naming a Company
// https://leetcode.com/problems/naming-a-company/


var distinctNames = function(ideas) {
    // Create set of distinct words
    let ideaSet = new Set(ideas);

    // Initialize result
    let count = 0;

    // For ever word in the ideas array
        // Iterate over the ideas array
            // Create the new words
            // If neither of the new words are already in the ideas set
                // Inrecement result counter
    for (let i = 0; i < ideas.length; i++) {
        for (let j = i + 1; j < ideas.length; j++) {
            console.log(ideas[i], ideas[j]);
            let word1 = ideas[i];
            let word2 = ideas[j];
            let [newWord1, newWord2] = [word1[0] + word2.slice(1), word2[0] + word1.slice(1)];
            if (!ideaSet.has(newWord1) && !ideaSet.has(newWord2)) {
                count++;
            }
        }
    }

    // Return result
    return count*2;
};


// Naive solution
    // O(n^2) time complexity
    // Passes base test cases but so slow that submission timesout
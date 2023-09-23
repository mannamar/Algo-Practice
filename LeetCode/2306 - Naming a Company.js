// 2306. Naming a Company
// https://leetcode.com/problems/naming-a-company/


var distinctNames = function(ideas) {
    // Initialize hash
    let ideaHash = {};

    // Iterate over ideas array
        // Create set of suffixes with first letters as keys
    for (let i = 0; i < ideas.length; i++) {
        let key = ideas[i][0];
        let val = ideas[i].slice(1);
        if (ideaHash[key] === undefined) {
            ideaHash[key] = new Set();
        }
        ideaHash[key].add(val)
    }

    // Initialize result
    let count = 0;

    // For every set in the hash (Set1)
        // Iterate over the hash (Set2)
            // Initialize dupes to 0
            // If the sets are not the same
                // Iterate over Set2
                    // If the current item is also in Set 1
                        // Iterate dupes
            // Add unique values to result count
    for (let key1 in ideaHash) {
        for (let key2 in ideaHash) {
            let dupes = 0;
            if (key1 !== key2) {
                for (let suffix of ideaHash[key2]) {
                    if (ideaHash[key1].has(suffix)) {
                        dupes++;
                    }
                }
                let uniques1 = ideaHash[key1].size - dupes;
                let uniques2 = ideaHash[key2].size - dupes;
                count = count + (uniques1 * uniques2);
            }
        }
    }

    // Return result
    return count;
};


// Solution is a still a little slow
// No idea what the time complexity is
    // O(n) to create initial hash
    // O(26^2) [i.e. constant time] for iterating over sets
        // BUT What about iterating over contents of each set?
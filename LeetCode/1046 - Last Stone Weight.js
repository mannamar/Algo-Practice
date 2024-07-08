// 1046. Last Stone Weight
// https://leetcode.com/problems/last-stone-weight/


var lastStoneWeight = function(stones) {
    // Max-heapify stones array
    let maxHeap = new MaxPriorityQueue();
    for (let stone of stones) {
        maxHeap.enqueue(stone);
    }

    // While there are stones in the heap
    while (maxHeap.size() > 1) {
        // Pull out two largest stones
        let stone1 = maxHeap.dequeue().element;
        let stone2 = maxHeap.dequeue().element;
        // Smash the stones
        let newStone = Math.abs(stone1 - stone2);
        // Add the leftover (newStone) back to the heap
        if (newStone !== 0) {
            maxHeap.enqueue(newStone);
        }
    }

    // If heap is empty, return 0
    if (maxHeap.size() === 0) {
        return 0;
    }

    // Return last remaining stone
    return maxHeap.front().element;
};


// NOTES
// Using an array would be less efficient
    // Sorting array is O(n * log n) time
        // Building the heap is only O(n) time
    // Insertion for sorted array is O(n * log n) time
        // Insertion for heap is only O(log n) time
    // Popping from an array is O(1)
        // dequeueing from heap is O(log n)
        // Only part where array would be more efficient
    // Overall time complexities
        // Array => O(n * log n) + n * (O(1) + O(log n + n)) => O(n^2)
        // Heap => O(n) + n * (O(log n) + O(log n)) => O(n * log n)
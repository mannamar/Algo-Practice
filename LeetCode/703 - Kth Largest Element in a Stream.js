// 703. Kth Largest Element in a Stream
// https://leetcode.com/problems/kth-largest-element-in-a-stream/


var KthLargest = function(k, nums) {
    // Initialize variables
    this.minHeap = new MinPriorityQueue();
    this.k = k
    // Create heap from array
    for (let num of nums) {
        this.add(num);
    }
};

KthLargest.prototype.add = function(val) {
    // If heap has less elements than k
    if (this.minHeap.size() < this.k) {
        // Add val to heap
        this.minHeap.enqueue(val);
    // Else (if heap has k values already)
    // Check if val is larger than the smallest item in the heap
    } else if (val > this.minHeap.front()?.element) {
        // Remove the smallest item
        this.minHeap.dequeue()
        // Add val to the heap
        this.minHeap.enqueue(val);
    }

    // Return the smallest item in the heap
    return this.minHeap.front()?.element;
};


// NOTES
// JS does not have built-in minHeap/priorityQueue (Unlike Python)
// Above used MinPriorityQueue() from a third party library
    // Learn to implement minHeap from scratch
        // minHeap can be constructed as a tree (object with val, left, right properties)
        // Or it can be implemented as an array
            // Using math to keep track of the nesting (e.g. indexOfLeftChild = 2*i + 1)
// Overall time complexity?

// HEAP NOTES
// Accessing min value of heap is O(1)
// Adding a value to a heap is O(log n)
// Finding a value in a heap is O(n)
// Removing the smallest value is O(log n)
    // Access the smallest value is O(1)
    // Swap in the last value to the root O(1)
    // Heapify down from the root O(log n)
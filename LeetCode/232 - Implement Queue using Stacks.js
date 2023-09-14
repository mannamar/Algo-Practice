// 232. Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/description/

var MyQueue = function() {
    this.queue = [];
};

MyQueue.prototype.push = function(x) {
    this.queue.push(x);
};

MyQueue.prototype.pop = function() {
    return this.queue.shift();
};

MyQueue.prototype.peek = function() {
    return this.queue[0];
};

MyQueue.prototype.empty = function() {
    return this.queue.length === 0;
};

// A stack is a last-in-first-out data structure (stack of plates)
// We need to simulate a queue using at most two stacks
    // A queue is a first-in-first-out data structure (plates on a conveyer belt)
// Current solution passes tests but does not properly follow instructions
    // Should be using two stacks (i.e. two arrays)
    // Must simulate arrays as stacks
        // Can not use the built in Array.shift() and Array.unshift() methods
        // Can use the built in Array.push() and Array.pop() methods

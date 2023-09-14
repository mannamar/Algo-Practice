// 232. Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/description/

var MyQueue = function() {
    this.queue = [];
};

MyQueue.prototype.push = function(x) {
    this.queue.push(x);
};

MyQueue.prototype.pop = function() {
    while (this.queue.length > 0) {
        this.temp.push(this.queue.pop());
    }
    let first = this.temp.pop();
    while (this.temp.length > 0) {
        this.queue.push(this.temp.pop());
    }
    return first;
};

MyQueue.prototype.peek = function() {
    while (this.queue.length > 0) {
        this.temp.push(this.queue.pop());
    }
    let first = this.temp[this.temp.length-1];
    while (this.temp.length > 0) {
        this.queue.push(this.temp.pop());
    }
    return first;
};

MyQueue.prototype.empty = function() {
    return this.queue.length === 0;
};

// A stack is a last-in-first-out data structure (stack of plates)
// We need to simulate a queue using at most two stacks
    // A queue is a first-in-first-out data structure (plates on a conveyer belt)
// Current solution simulates arrays as stacks
// Need to learn how to reduce average time complexity
    // Currently O(1) for push/empty but O(n) for pop/peek
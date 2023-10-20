// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


// Using sliding window
var maxProfit = function(prices) {
    // Set initial "buy" pointer
    let left = 0;
    // Set initial "sell" pointer
    let right = 1;
    // Initialize max profit as 0
    let maxProfit = 0;

    // While right pointer is in bounds
    while (right < prices.length) {
        // If the buy price is less than the sell price
        if (prices[left] < prices[right]) {
            // Calculate the profit
            let profit = prices[right] - prices[left];
            // If the profit is higher than the current max profit
                // Set max profit to current profit
            maxProfit = Math.max(profit, maxProfit);
        // Else (if buy price is equal to or greater than sale price)
        } else {
            // Set left pointer to right position
            left = right;
        }
        // Increment right pointer
        right++;
    }

    // Return max profit
    return maxProfit;
};


// Using standard iteration
var maxProfit = function(prices) {
    let maxProfit = 0;
    let curProfit = 0;
    let oldPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        let newPrice = prices[i];
        let newProfit = newPrice - oldPrice;
        if ( (curProfit + newProfit) < 0 ) {
            // console.log((curProfit + newProfit))
            curProfit = 0;
        } else {
            curProfit += newProfit;
        }
        if (curProfit > maxProfit) {
            maxProfit = curProfit;
        }
        // console.log(i, curProfit);
        oldPrice = newPrice;
    }
    return maxProfit;
};

// NOTES
// Both methods are O(n) time and O(1) space complexity
// In essence they are doing the same thing
    // Sliding window is more intuitive to follow
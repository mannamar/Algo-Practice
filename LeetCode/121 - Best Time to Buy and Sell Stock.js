// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


// Using sliding window
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(profit, maxProfit);
        } else {
            left = right;
        }
        right++;
    }

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
//Longest increasing subsequence of Array
const lengthOfLIS = (nums) => {
    if (nums.length === 0) return 0;
    const n = nums.length;
    const dp = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j=0; j< i; j++){
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[i] + 1);
            }
        }
    }
    return Math.max(...dp)
}

//coin change
const coinChange = function(coins, amount) {
    const dp = Array(amount+1).fill(amount+1);
    dp[0]=0;
    for (let i = 1; i < amount + 1; i++) {
        for (let coin of coins) {
            if (i - coin >= 0)  {
                console.log(coin, dp[i], dp[i - coin]);
                dp[i]=Math.min(dp[i], dp[i - coin]+1)
            }    
        }
    }
    console.log(dp, dp[amount]);
    return dp[amount] === amount + 1 ? -1 : dp[amount]
};
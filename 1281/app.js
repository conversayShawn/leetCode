// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 
// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
 
// Constraints:
// 1 <= n <= 10^5

// STARTER SOLUTION

// @param {number} n
// @return {number}

// var subtractProductAndSum = function(n) {
    
// };

var subtractProductAndSum = function(n) {
    let num = n.split("");
    console.log(num)
    let sum = num.map(x => x+=);
                      console.log(sum)
    let product = num.map(y => y*=)
                    console.log(product)
    let res = product - sum
    return res
};
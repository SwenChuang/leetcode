// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// @param {number} n
// @return {number}


// Solution 1: 數學排列組合算法 

var climbStairs1 = function (n) {

    let twoNum = Math.floor(n / 2);
    let count = 1; // 一定有全部都是 1 的1種情況

    function permutation(num) {
        let res = 1;
        for (let i = num; i > 0; i--) {
            res *= i;
        }
        return res;
    }

    for (let i = twoNum; i >= 1; i--) {


        let twoMethod = n - 2 * i;
        count += (permutation(i + twoMethod) / permutation(twoMethod) / permutation(i));

    }

    return count;

};



// Solution 1: 非波納切數列算法 


var climbStairs2 = function (n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    let afterOneStep = 2,
        afterTwoSteps = 1,
        current;
    for (let i = 2; i < n; i++) {
        console.log('before', afterOneStep, afterTwoSteps, current)

        current = afterOneStep + afterTwoSteps;
        afterTwoSteps = afterOneStep;
        afterOneStep = current;

        console.log('after', afterOneStep, afterTwoSteps, current)
    }
    return current;
};

// console.time('1')
// console.log(climbStairs1(2));
// console.log(climbStairs1(3));
// console.log(climbStairs1(5));
// console.log(climbStairs1(6));
// console.log(climbStairs1(8));
// console.timeEnd('1')

// console.time('2')
// console.log(climbStairs2(2));
// console.log(climbStairs2(3));
// console.log(climbStairs2(5));
// console.log(climbStairs2(6));
console.log(climbStairs2(8));
// console.timeEnd('2')


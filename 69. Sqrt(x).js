// 69. Sqrt(x)

// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

// Example 1:

// Input: x = 4
// Output: 2

// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.



// @param {number} x
// @return {number}

// solution 1: slow function

var mySqrt1 = function (x) {

    let i = 1;

    while (x >= i ** 2) {
        i++
    }
    return i - 1;
};

console.log("Solution 1: liner Search")
console.log(mySqrt1(4))
console.log(mySqrt1(8))


//Solution 2: binary Search

var mySqrt2 = function (x) {


    let startIndex = 0;
    let endIndex = Math.round(x / 2);
    let mid = 0;

    while (endIndex >= startIndex) {

        mid = Math.floor((endIndex + startIndex) / 2);


        if (x == mid * mid) {
            // console.log("1 work", mid)
            return mid;
        } else if (x > mid * mid) {
            // console.log("2 work", mid)

            startIndex = mid + 1;
        } else {
            // console.log("3 work", mid)

            endIndex = mid - 1;
        }
    }

    return endIndex;

};

console.time("1")
console.log("Solution 1: liner Search")
console.log(mySqrt1(0))
console.log(mySqrt1(1))
console.log(mySqrt1(2))
console.log(mySqrt1(4))
console.log(mySqrt1(8))
console.log(mySqrt1(100))
console.log(mySqrt1(1000))
console.log(mySqrt1(10000000000000000000))
console.timeEnd("1")

console.time("2")
console.log("Solution 2: binary Search")
console.log(mySqrt2(0))
console.log(mySqrt2(1))
console.log(mySqrt2(2))
console.log(mySqrt2(4))
console.log(mySqrt2(8))
console.log(mySqrt2(100))
console.log(mySqrt2(1000))
console.log(mySqrt2(10000000000000000000))
console.timeEnd("2")
// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4


// @param { number[] } nums
// @param { number } target
// @return { number }


var searchInsert = function (nums, target) {

    let startIndex = 0;
    let endIndex = nums.length - 1;
    let midIndex = 0;

    while (endIndex >= startIndex) {

        midIndex = Math.floor((startIndex + endIndex) / 2);

        if (target === nums[midIndex]) {
            return midIndex
        } else if (target >= nums[midIndex]) {
            startIndex = midIndex + 1;
        } else {
            endIndex = midIndex - 1;
        }

    }

    return startIndex;

};

// console.log(searchInsert([1, 3, 5, 6], 4))

console.log(searchInsert([3, 5, 6, 10, 12], 3));    // 0
console.log(searchInsert([3, 5, 6, 10, 12], 6));    // 2
console.log(searchInsert([3, 5, 6, 10, 12], 12));   // 4
console.log(searchInsert([3, 5, 6, 10, 12], 1));    // 0
console.log(searchInsert([3, 5, 6, 10, 12], 7));    // 3
console.log(searchInsert([3, 5, 6, 10, 12], 13));   // 5

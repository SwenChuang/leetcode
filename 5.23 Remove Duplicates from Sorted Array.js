/**
 * @param {number[]} nums
 * @return {number}
 */
var a = [];
var nums = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5]

// var removeDuplicates = function (nums) {

//     for (let i = 0; i < nums.length; i++) {

//         for (let j = i + 1; j < nums.length; j++) {

//             if (nums[i] == nums[j]) {
//                 delete nums[j]
//             }
//         }
//     }

//     // a = nums.filter((a) => a);


//     return nums.length

// };

// console.log(removeDuplicates(nums), nums, a)


// let NumArr = [0,0,0,1,1,1,2,2,2,3,3,4,4,4,4,5,5];
// console.log(NumArr.length)

// for(let i=0 ; i<NumArr.length ; i++){
//     for(let j=i+1 ; j<NumArr.length ; j++){
//         if(NumArr[i] == NumArr[j]){
//             delete NumArr[j]
//         }     
//     }
//     NumArr.sort()
// }

// console.log(NumArr.length)

// var removeDuplicates = function (nums) {
//     for (let i = 0; i < nums.length - 1;) {
//         // console.log(nums , i)
//         if (nums[i] == nums[i + 1]) {
//             let a = nums.splice(i, 1)
//             console.log(i,a)
//         } else {
//             i++
//         }
//     }
//     console.log(nums)
// };

// removeDuplicates(nums)


var s = [1,231,354,4898,156]
s.splice(1,2)
console.log(s)
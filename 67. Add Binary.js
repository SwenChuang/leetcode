// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.


// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.



//  @param {string} a
//  @param {string} b
//  @return {string}

var addBinary = function (a, b) {

    let aArr = a.split('');
    let bArr = b.split('');
    let carry = false;
    let res = '';

    if (a == 0 && b == 0) {
        return '0';
    }

    while (aArr.length || bArr.length) {

        let aIndex = aArr.pop() || '0';
        let bIndex = bArr.pop() || '0';

        if (carry) {
            // 有進位
            console.log('執行進位')
            if (aIndex == '1' && bIndex == '1') {
                res = '1'.concat(res);
            } else if (aIndex == '0' && bIndex == '0') {
                res = '1'.concat(res);
                carry = false;
            } else {
                res = '0'.concat(res);
            }
        } else {
            // 沒有進位
            console.log('執行沒進位')

            if (aIndex == '1' && bIndex == '1') {
                res = '0'.concat(res);
                carry = true;
            } else if (aIndex == '0' && bIndex == '0') {
                res = '0'.concat(res);
            } else {
                res = '1'.concat(res);
            }
        }
    }

    if (res[0] == 0 || carry == true) {
        res = '1'.concat(res);
    }

    return res

};


console.log(addBinary(a = "11", b = "1"))
console.log(addBinary(a = "1010", b = "1011"))
console.log(addBinary(a = "1111", b = "1111"))



// let aTest = "AB"

// console.log('0'.concat(aTest))

// let bTest = 100;
// console.log(bTest.toString(2))
// example 1 
// Input: haystack = "hello", needle = "ll"
// Output: 2

// example 2
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1


//  @param {string} haystack
//  @param {string} needle
//  @return {number}


var strStr = function (haystack, needle) {
    haystack = "a";
    needle = "a";

    if (haystack === "") {
        return 0;
    } else {
        return haystack.indexOf(needle);
    }


};

console.log(strStr());
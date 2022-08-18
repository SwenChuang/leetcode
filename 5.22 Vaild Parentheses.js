//    Example 1:
//     Input: s = "()"
//     Output: true

//     Example 2:
//     Input: s = "()[]{}"
//     Output: true

//     Example 3:
//     Input: s = "(]"
//     Output: false






// <========== ans1 ============>

// var isValid = function (s) {
//     var stack = [];
//     for (let item of s) {
//         console.log(item)
//         if (item == '(' || item == '[' || item == '{') {
//             stack.push(item)
//             console.log(stack)
//         }

//         else {
//             var tmp = stack.pop()
//             console.log(tmp)
//             switch (item) {
//                 case ")":
//                     if (tmp != "(")
//                         return false;
//                     break;

//                 case "]":
//                     if (tmp != "[")
//                         return false;
//                     break;

//                 case "}":
//                     if (tmp != "{")
//                         return false;
//                     break;
//                 default:
//                     return false;

//             }
//         }
//     }
//     return stack.length == 0
// };


// <========== ans2 ============>

var s = "()[]{}";
var isValid = function (s) {
    var sArr = s.split('');
    let stock = [];
    let lookup = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for (item of sArr) {
        if (item in lookup) {
            stock.push(item)
        }
        else if (stock.length == 0 || lookup[stock.pop()] != item) {
            return false
        }
    }
    return stock.length == 0;

};


console.log(isValid(s))


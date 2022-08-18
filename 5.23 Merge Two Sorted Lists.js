
//   Definition for singly - linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var list1 = [1, 2, 4], list2 = [1, 3, 4];

var mergeTwoLists = function (list1, list2) {
    var temp = new ListNode(0);
    var result = new ListNode(0);
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            temp.next = list1;
            list1 = list1.next;
        }
        else {
            temp.next = list2;
            list2.next = list2;
        }
        temp = temp.next;
    }
    if (list1) {
        temp.next = list1;
    }
    else if (list2) {
        temp.next = list2;
    }

    return result;


};

console.log(mergeTwoLists(list1, list2))



// <============================ Ans ==========================>
var mergeTwoLists = function (l1, l2) {
    var temp = new ListNode(0);
    var result = new ListNode(0);

    if (l1 == null && l2 == null) {
        return null;
    }
    else if (l1 == null && l2 != null) {
        return l2;
    }
    else if (l1 != null && l2 == null) {
        return l1;
    }

    if (l1.val <= l2.val) {
        temp = l1;
        l1 = l1.next;
    }
    else {
        temp = l2;
        l2 = l2.next;
    }

    result = temp;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            temp.next = l1;
            l1 = l1.next;
        }
        else {
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next;
    }
    if (l1) {
        temp.next = l1;
    }
    else if (l2) {
        temp.next = l2;
    }

    return result;
};
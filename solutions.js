// These are my Leetcode solutions using javascript:

// 876. Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// This method only works if an array is provided, however, since the exercise uses linked lists, this solution is invalid:
var middleNode0 = function(head) {
    let arr = Array.from(head);
    let headStr = arr.join("");
    let mid = arr.length / 2;
    return headStr.substring(mid, arr.length).split("");
};
// console.log(middleNode([1,2,3,4,5,6]));


// This solution uses one slow pointer (.next) and one fast pointer (.next.next) to move thru the list returning the slow pointer when the fast pointer reaches the end of the list giving you the middle node:
var middleNode = function (head) {
    let pointerSlow = head;
    let pointerFast = head;

    while (pointerFast && pointerFast.next) {
        pointerSlow = pointerSlow.next;
        pointerFast = pointerFast.next.next;
    }

    return pointerSlow;
};

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// This approach does not work because it uses extra memory.
// The correct solution should alter the existing array:
var removeDuplicates0 = function(nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i ++) {
        if (!newArr.includes(nums[i])) {
            newArr.push(nums[i]);
        }
    }
    return newArr.length;
};
// console.log(removeDuplicates0([0,0,1,1,1,2,2,3,3,4]));

// This solution uses two indexes to compare if the previous index is a duplicate of the current index, if it is not it inserted into the current index and the inserIndex count is updated. This rearranges the existing array with the numbers sorted in a nin duplicated manner. Any numbers after the initial non-repeating numbers leftover do not matter since only the count ios returned:
var removeDuplicates = function (nums) {
    let insertIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i]) {
            nums[insertIndex] = nums[i];
            insertIndex++;
        }
    }
    return insertIndex;
};
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// This solution uses two pointers to check the array. It checks the first index against {val} and if it is a match it changes that num to the last index of the array and decrements the right pointer by. If it is not the same as {val} it increments to the next index and repeats the process until it completes the loop. The final result is a trimmed array removing instances of {val} up to k elements. Any nums after k are ignored:
var removeElement = function (nums, val) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        console.log("nums-array: " + nums);
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
            console.log("right: " + right);
        } else {
            left++;
            console.log("left: " + left);
        }
    }
    console.log("trimmed-array: " + nums);
    return left;
};
// console.log(removeElement([0,1,2,2,3,0,4,2], 2));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};
// console.log(strStr("sadbutsad"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/


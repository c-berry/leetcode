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
// console.log(strStr("sadbutsad", "sad"));

// This method uses the bare structures of strings and arrays without any built-in methods. This is what employers want to see and should be reviewed.
var strStr2 = function(haystack, needle) {
    if (haystack.length >= needle.length) {
        console.log("hay.length: " + haystack.length);
        console.log("needle.length: " + needle.length);
        let j;
        for (let i = 0; i < haystack.length; i++) {
            console.log("i: " + i);
            for (j = 0; j < needle.length; j++) {
                console.log("j: " + j);
                console.log("needle[j] = " + needle[j] + ", haystack[i + j] = " + (haystack[i + j]));
                if (needle[j] !== haystack[i + j]) break;
            }
            if (j === needle.length) return i;
        }
    }
    return -1;
};
// console.log(strStr2("sadbutsad", "sad"));
// console.log(strStr2("notsad", "sad"));
// console.log(strStr2("notsadnope", "nope"));
// console.log(strStr2("notsadatall", "happy"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
var lengthOfLastWord = function(s) {
    return s.trim().split(' ').at(-1).length;
};
// console.log(lengthOfLastWord("luffy is still joyboy"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
var longestCommonPrefix = function (strs) {
    // Return early on empty input
    if (!strs.length) return '';

    // Loop through the letters of the first word
    for (let i = 0; i <= strs[0].length; i++) {
        // Check if this character is present in the same position of every string
        if (!strs.every((string) => string[i] === strs[0][i])) {
            // If not, return the string up to and including the previous character
            return strs[0].slice(0, i);
        }
    }

    return strs[0];
};
// console.log(longestCommonPrefix(["flower","flow","flight"]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
var isValid = function(s) {
    if (s.length % 2 !== 0 ) return false;

    var stack = [];
    for (let c of s) {
        if (c === ')' && stack[stack.length -1] === '('){
            stack.pop()
        } else if (c === '}' && stack[stack.length -1] === '{'){
            stack.pop()
        } else if (c === ']' && stack[stack.length -1] === '['){
            stack.pop()
        } else {
            stack.push(c)
        }

    }

    return !stack.length
};
// console.log(isValid("()"));
// console.log(isValid("()[]{}"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given an integer n, determine the alternating sum of its digits. Add up all the digits, taking the first digit with a positive sign, the second digit with a negative sign, the third digit with a positive sign...
function solution(n) {
    // Hold var of result
    let result = 0;
    // Convert integer (n) into an array
    let n2 = String(n).split("").map(Number);
    // Loop thru array
    for (let i = 0; i < n2.length; i++) {
        // If the index is even use the pos sign
        if (i % 2 === 0) {
            result += n2[i];
        } else {
            // If index is odd use the negative sign
            result -= n2[i];
        }
    }
    return result;
}
// console.log(solution(12345));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
var containsDuplicate = function(nums) {
    let arr = [];
    for(let i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i]);
        } else {
            return true;
        }
    }
    return false;
};
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
// console.log(containsDuplicate([1,2,3,4]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

var isPalindrome = function(x) {
    let arr = [];
    arr.push(x);
    return arr.join('').split('').reverse().join('') === arr.join();
};
// console.log(isPalindrome(121));
// console.log(isPalindrome(122));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
var twoSum = function(nums, target) {
    var map = {};
    for(var i = 0 ; i < nums.length ; i++){
        var n = nums[i];

        if(map[target-n] >= 0){
            return [map[target-n],i]
        }
        else {
            map[n] = i;   //use map to store the value and index position
        }
    }
};
// console.log(twoSum([2,7,11,15], 9));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.
var romanToInt = function(s) {
    // Create an obj with the conversions
    const obj = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}
    let result = 0

    // Iterate s and assign each number the value from the obj
    const splitted = s.split('').map(key => obj[key]);

    // Iterate splitted
    // Do the subtraction when next num is lower than current num
    // Otherwise, add current num to the result variable
    for (let i = 0; i < splitted.length; i++) {
        splitted[i] < splitted[i + 1] ? result -= splitted[i] : result += splitted[i]
    }

    return result
}
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/


// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

    var mergeTwoListsPseudoCode = function(l1, l2) {
    // initialize a dummy head node

    // initialize a crtNode variable to keep track of the current node, starting with the dummy head node

    // while there are still nodes to compare in two lists
    // if value of 2nd node is less than value of 1st node
    // set the current node's link to l2 node
    // set the l2 node to l2's next node
    // else
    // set the current node's link to l1 node
    // set the l1 node to l1's next node

    // move on to the next node

    // if one of the lists no longer have any nodes to compare, point crt's link to the remaining nodes in the other list
    // if both lists are empty, point crt's link to null

    // return merged linked list
}

var mergeTwoLists = function(l1, l2) {
    var mergedHead = { val : -1, next : null },
        crt = mergedHead;
    while(l1 && l2) {
        if(l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next;
    }
    crt.next = l1 || l2;

    return mergedHead.next;
};
// console.log(mergeTwoLists([1,2,4]), [1,3,4]);

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    const n = nums.length

    for (let i=0; i<n; i++){
        const r = target - nums[i]
        if (r === 0) return i
        if (r < 0) return i
    }

    return n
};
// console.log(searchInsert([1,3,5,6]), 5);
// console.log(searchInsert([1,3,5,6], 7));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/


var plusOne = function(digits) {
    // Join the digits with no space and add 1
    let str = digits.join("");
    let num = BigInt(str)+ BigInt(1);
    // Convert the num back into an array
    num = num.toString().split('').map((num) => parseInt(num));
    return num;
};
// console.log(plusOne([1,2,3]));
// console.log(plusOne([4,3,2,1]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};
// console.log(mySqrt(4));
// console.log(mySqrt(8));

// Not using built-in methods:
var mySqrt2 = function(x) {
    let sqrt = 1;
    if(x === 0){
        return 0;
    }
    for(let i = 1; i * i <= x; i++){
        sqrt = i;
    }
    return sqrt;
};
// console.log(mySqrt2(4));
// console.log(mySqrt2(8));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
var climbStairs = function (n) {
    let first = 1;
    let second = 1;
    for (let i = 0; i < n - 1; i++) {
        let temp = first;
        first = first + second;
        second = temp;
    }
    return first;
};
// console.log(climbStairs(3));
// console.log(climbStairs(2));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
var deleteDuplicates = function(head) {
    if(!head) return head;
    var cur = head;

    while (cur != null && cur.next != null) {
        if (cur.next.val === cur.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length, ...nums2);
    nums1.sort((a, b) => a - b);
};
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false
var isSameTree = function(p, q) {
    return JSON.stringify(p) === JSON.stringify(q);
};
// console.log(isSameTree([1, 2, 3], [1, 2, 3]));
// console.log(isSameTree([1, 2], [1, null, 2]));

var isSameTree2 = function(p, q) {
    if (p == null && q == null){
        return true
    }
    if (p==null || q==null) {
        return false
    }
    if (p.val !== q.val) {
        return false
    }
    return isSameTree2(p.left, q.left) && isSameTree2(p.right,q.right);
};
// console.log(isSameTree2([1, 2, 3], [1, 2, 3]));
// console.log(isSameTree2([1, 2], [1, null, 2]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Converts string to array, reverses it, then converts back to string
const reverse = (str) => {
    const toArr = str.split("");
    const reversed = toArr.reverse();
    return reversed.join("");
}

// Removes all non-alphanumeric characters and converts to lowercase
const lowerTrim = (str) => {
    const trimmed = str.replace(/[^a-z0-9]/gi, '');
    return trimmed.toLowerCase();

}

var isPalindrome2 = function(s) {
    const alphaNum = lowerTrim(s);
    return alphaNum === reverse(alphaNum);
};
// console.log(isPalindrome2("A man, a plan, a canal: Panama"));
// console.log(isPalindrome2("race a car"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 // You must implement a solution with a linear runtime complexity and use only constant extra space.
const singleNumber = (nums) => {
    let res = 0;

    nums.forEach(num => {res ^= num;});

    return res;
};
// console.log(singleNumber([2,2,1]));
// console.log(singleNumber([4,1,2,1,2]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]
var generate = function(numRows) {
    const output = [];

    for (let i = 0; i < numRows; i++) {
        const rowValue = [];

        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                rowValue[j] = 1;
            } else {
                rowValue[j] = output[i - 1][j - 1] + output[i - 1][j];
            }
        }
        output.push(rowValue)
    }

    return output;
};
// console.log(generate(5));
// console.log(generate(1));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given two binary strings a and b, return their sum as a binary string.
// Example 1:
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"
var addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
};
// console.log(addBinary("11", "1"));
// console.log(addBinary("1010", "1011"));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
var maxDepth = function(root) {
    // Base case...
    // If the subtree is empty i.e. root is NULL, return depth as 0...
    if(root == null)  return 0;
    // if root is not NULL, call the same function recursively for its left child and right child...
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    // When the two child function return its depth...
    // Pick the maximum out of these two subtrees and return this value after adding 1 to it...
    return Math.max(leftDepth, rightDepth) + 1;    // Adding 1 is the current node which is the parent of the two subtrees...
};

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

//  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

var maxProfit = function(prices) {
    // set to first element in array by default
    let minPrice = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > profit) {
            profit = prices[i] - minPrice;
        }
    }
    return profit;
};
// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([7,6,4,3,1]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Write an algorithm to determine if a number n is happy.
//  A happy number is a number defined by the following process:
//  Starting with any positive integer, replace the number by the sum of the squares of its digits.
//   Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
//   Return true if n is a happy number, and false if not.
//   Example 1:
//
// Input: n = 19
// Output: true
// Explanation:
//     12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
var isHappy = function (n) {
    let mySet = new Set();
    let counter = 0;
    while (counter !== 1 && !mySet.has(n)) {
        mySet.add(n);
        let element = n.toString().split("").map((number) => parseInt(number));
        counter = element.reduce((acc, item) => {
            acc += Math.pow(item, 2);
            return acc;
        }, 0)
        n = counter;
    }
    return counter === 1;
};
// console.log(isHappy(19));
// console.log(isHappy(2));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given the root of a binary tree, return the preorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:
// Input: root = []
// Output: []
var preorderTraversal = function (root) {
    const ans = [];
    preorder(root);
    return ans;

    function preorder(root) {
        if (root === null) {
            return;
        }
        ans.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
};

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
//   Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true
var containsNearbyDuplicate = function(nums, k) {
    var map = new Map();
    for(var i = 0; i < nums.length; i++){
        if(map.get(nums[i]) !== undefined){
            if(i - map.get(nums[i]) <= k){
                return true;
            }
            else map.set(nums[i], i);
        }
        else map.set(nums[i], i);
    }
    return false;
};
// console.log(containsNearbyDuplicate([1,2,3,1]));
// console.log(containsNearbyDuplicate([1,0,1,1]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
//
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:
// Input: rowIndex = 0
// Output: [1]
var getRow = function(rowIndex) {
    var result = [1];
    for(var i = 0; i < rowIndex; i++){
        result.unshift(1);
        for(var j = 0; j <= i; j++){
            result[j] = (result[j + 1]||0) + (result[j + 2]||0);
        }
        result.pop();
        result.unshift(1);
    }
    return result;
};
console.log(getRow(3));
console.log(getRow(0));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given an array nums of size n, return the majority element.
//  The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//   Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
var majorityElement = function(nums) {
    var obj = {};

    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if(obj[nums[i]] > nums.length / 2)  return nums[i];
    }
};
// console.log(majorityElement([3,2,3]));
// console.log(majorityElement([2,2,1,1,1,2,2]));

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
var sortedArrayToBST = function (nums) {
    if (nums.length === 0) {
        return null;
    }
    let middle = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[middle]);
    root.left = sortedArrayToBST(nums.slice(0, middle));
    root.right = sortedArrayToBST(nums.slice(middle + 1));
    return root;
};

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given the root of a binary tree, return the postorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]
var postorderTraversal = function(root) {
    if (!root) return [];

    var result = [], stack = [root];

    while (stack.length) {
        var node = stack.pop();
        // insert the node val to the front
        result.unshift(node.val);
        if (node.left) stack.push(node.left); // left first
        if (node.right) stack.push(node.right); // then right
    }
    return result;
};

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false
var isSymmetric = function(root) {
    if (!root) { // Sanity check
        return true;
    }

    // Check if tree s & t are mirroring each other
    function isMirror(s, t) {
        if (!s && !t) {
            return true; // Both nodes are null, ok
        }
        if (!s || !t || s.val !== t.val) {
            return false; // Found a mismatch
        }
        // Compare the left subtree of `s` with the right subtree of `t`
        // and the right subtree of `s` with the left subtree of `t`
        return isMirror(s.left, t.right) && isMirror(s.right, t.left);
    }

    return isMirror(root.left, root.right);
};

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given the root of a binary tree, invert the tree, and return its root.
//   Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]
function invertTree(root) {
    if (root) {
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    }
    return root;
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
//  Given two integers x and y, return the Hamming distance between them.
var hammingDistance = function (x, y) {
    var bin1 = x.toString(2);
    var bin2 = y.toString(2);
    var count = 0;

    while (bin1.length !== 32)
        bin1 = bin1.replace('', 0);

    while (bin2.length !== 32)
        bin2 = bin2.replace('', 0);

    for (var i = 0; i < 32; i++) {

        if (bin1[i] !== bin2[i])
            count++;
    }

    return count;
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// You are given two strings s and t.
//   String t is generated by random shuffling string s and then add one more letter at a random position
//   Return the letter that was added to t.
var findTheDifference = function(s, t) {
    var rex = s.split("");

    for(var i = 0; i < rex.length; i++){
        t = t.replace(rex[i], '');
    }
    return t;
};

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
var findDisappearedNumbers = function(nums) {
    var res = [];
    for(var i = 1; i < nums.length+1; i++){
        if(nums.indexOf(i) === -1)res.push(i)
    }
    return res;
};

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given the root of a binary tree, invert the tree, and return its root.
//     Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
function invertTree2(root) {
    if (root) {
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    }
    return root;
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]
var inorderTraversal = function(root) {
    var stack = [],
        res = [];

    while(true){
        if(root !== null){
            stack.push(root);
            root = root.left;
        } else {
            if(stack.length === 0) break;
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }

    return res;
};

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

// Given the head of a singly linked list, reverse the list, and return the reversed list.
//     Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
let reverseList = function(head) {
    let prev = null, next = null;
    while (head) {
        next = head.next
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/


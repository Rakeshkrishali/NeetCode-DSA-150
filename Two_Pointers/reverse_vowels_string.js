// 345. Reverse Vowels of a String


// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"


var reverseVowels = function(s) {
    const vowels = /[aeiou]/i;
    let arr = s.split('');
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        while (start < end && !vowels.test(arr[start])) {
            start++;
        }
        while (start < end && !vowels.test(arr[end])) {
            end--;
        }

        // Swap
        const tmp = arr[start];
        arr[start] = arr[end];
        arr[end] = tmp;

        start++;
        end--;
    }

    return arr.join('');
};

// Valid Anagram

// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.


// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false



// The logic is efficient with O(n) time and O(1) space.

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const arr = new Array(26).fill(0);

    for (const char of s) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      arr[index]++;
    }

    for (const char of t) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      arr[index]--;
    }

    return arr.every(count => count === 0);
}

isAnagram("abc", "abc") // true

isAnagram("abc", "abcd") // false


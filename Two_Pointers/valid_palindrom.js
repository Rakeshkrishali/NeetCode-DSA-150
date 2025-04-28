// Valid Palindrome

// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.


// Example 1:

// Input: s = "Was it a car or a cat I saw?"

// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:

// Input: s = "tab a cat"

// Output: false


function isPalindrome(s) {
        
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare the cleaned string with its reverse
    return cleaned === cleaned.split('').reverse().join('');
 }
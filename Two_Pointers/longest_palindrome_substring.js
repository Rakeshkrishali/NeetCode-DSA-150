// Given a string s, return the longest palindromic substring in s.


// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"



var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let ans = "";

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // slice after overshooting
        return s.slice(left + 1, right);
    };

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindrome
        let p1 = expandAroundCenter(i, i);
        if (p1.length > ans.length) ans = p1;

        // Even-length palindrome
        let p2 = expandAroundCenter(i, i + 1);
        if (p2.length > ans.length) ans = p2;
    }

    return ans;
};
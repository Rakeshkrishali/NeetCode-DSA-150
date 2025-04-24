// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.



// Time O(N)
// Space O(N)

var lengthOfLongestSubstring = function (s) {

    if(s === "")
    return 0

    const set = new Set()
    let ans = 1

    for (const ch of s) {
        if (set.has(ch)) {
            ans = Math.max(ans, set.size)
            while (set.has(ch)) {

                const firstValue = set.values().next().value;
                set.delete(firstValue);
            }
            set.add(ch)

        }
        else {
            set.add(ch)
            ans = Math.max(ans, set.size)
        }
    }

    return ans


};

 
// 1358. Number of Substrings Containing All Three Characters


// Given a string s consisting only of characters a, b and c.

// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 

// Example 1:

// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
// Example 2:

// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 
// Example 3:

// Input: s = "abc"
// Output: 1



var numberOfSubstrings = function (s) {
   let count = 0
   let map = {a:0, b:0, c:0}
   let left = 0

   for(let i = 0; i < s.length; i++)
   {
    map[s[i]]++
    while(map['a'] > 0 && map['b'] > 0 && map['c'] > 0)
    {
        count += s.length - i
        map[s[left]]--
        left++
    }
   }

   return count
};
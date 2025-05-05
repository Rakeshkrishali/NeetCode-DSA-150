// 151. Reverse Words in a String



// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.


var reverseWords = function(s) {
    let str = s.trim();
    let ans = "";
    let e = str.length - 1;

    while (e >= 0) {
        let t = e;
        let tmp = "";

        while (t >= 0 && str.charAt(t) !== " ") {
            tmp += str.charAt(t);
            t--;
        }

        tmp = tmp.split('').reverse().join('');
        ans += tmp + " ";

        while (t >= 0 && str.charAt(t) === " ") {
            t--;
        }

        e = t;
    }

    return ans.trim(); // Remove trailing space
};
















// Two pointer solution 

var reverseWords = function(s) {
    let str = s.trim();
    let i = str.length - 1;
    let j = i;
    let result = [];

    while (i >= 0) {
        // Move i to the start of the current word
        while (i >= 0 && str.charAt(i) !== ' ') {
            i--;
        }
        // Extract word
        result.push(str.substring(i + 1, j + 1));

        // Skip spaces
        while (i >= 0 && str.charAt(i) === ' ') {
            i--;
        }

        j = i;
    }

    return result.join(' ');
};

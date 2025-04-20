// Group Anagrams

// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.


// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]


// Sorting solution  
// Time  => O(n × k log k)
// Space => O(n × k)
function groupAnagrams(strs) {

    const map = new Map();

    for (const word of strs) {
        let sorted = word.split('').sort().join('');
        if (map.has(sorted)) {
            map.get(sorted).push(word); 
        } else {
            map.set(sorted, [word]);
        }
    }

    return Array.from(map.values());
}

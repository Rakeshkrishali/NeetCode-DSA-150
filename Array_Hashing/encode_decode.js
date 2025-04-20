// Encode and Decode Strings

// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// // Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]
// Example 2:

// Input: ["we","say",":","yes"]

// Output: ["we","say",":","yes"]


function encode(strs) {
    let ans = ""
    for(let str of strs)
    {
        ans  += str + "|"
    }
    return ans
}


function decode(str) {
    const arr = []
    let curr = ""
    for(let ch of str)
    {
        if(ch === "|")
        {
            arr.push(curr)
            curr = ""
        }
        else
        {
            curr+= ch
        }
    }
    return arr
}
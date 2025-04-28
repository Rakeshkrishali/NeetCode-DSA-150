// Container With Most Water

// You are given an integer array heights where heights[i] represents the height of the i th bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

// Input: height = [1,7,2,5,4,7,3,6]

// Output: 36
// Example 2:

// Input: height = [2,2,2]

// Output: 4


function maxArea(heights) {
    let s = 0
    let e = heights.length - 1
    let len = heights.length - 1
    let ans = 0
    while(s < e)
    {
        const start = heights[s]
        const end = heights[e]
        const min = Math.min(start,end)
        ans = Math.max(ans, min * len)
        if(start > end)
        e--
        else
        s++
        len--

    }
    return ans
}
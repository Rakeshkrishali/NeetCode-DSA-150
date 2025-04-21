// Products of Array Except Self

// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.



// Example 1:

// Input: nums = [1,2,4,6]

// Output: [48,24,12,8]
// Example 2:

// Input: nums = [-1,0,1,2,3]

// Output: [0,-6,0,0,0]


// Time O(N)
// Space O(N)
function productExceptSelf(nums) {
    const lArr = Array(nums.length)
    const rArr = Array(nums.length)

    let lP = 1
    let rP = 1

    for(const index in nums)
    {
        lArr[index] = lP
        lP *= nums[index]
    }

    for(let i = nums.length - 1; i >= 0; i--)
    {
        rArr[i] = rP
        rP *= nums[i]
    }

    const ans = new Array()

    for(let i = 0; i < nums.length; i++)
    {
        ans.push(lArr[i] * rArr[i])
    }

    return ans
}
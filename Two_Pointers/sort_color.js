// 75. Sort Colors


// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]



var sortColors = function(nums) {
    
    let s = 0
    let e = nums.length - 1
    let index = 0

    while(index <= e)
    {
        if(nums[index] === 0)
        {
            swap(nums,index,s)
            index++
            s++
        }
        else if(nums[index] === 2)
        {
            swap(nums, index, e)
            e--
        }
        else
        {
            index++
        }
    }

    function swap(nums, start ,end)
    {
        const tmp = nums[start]
        nums[start] = nums[end]
        nums[end] = tmp
    }
};
// Longest Consecutive Sequence

// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

// You must write an algorithm that runs in O(n) time.




// Example 1:

// Input: nums = [2,20,4,10,3,4,5]

// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].

// Example 2:

// Input: nums = [0,3,2,5,4,6,1,1]

// Output: 7




// Time Complexity: O(n)

// Space Complexity: O(n)

function longestConsecutive(nums) {

    if(nums.length === 0)
    return 0
    if(nums.length === 1)
    return 1

    const arr = nums
    let res = 1
    const set = new Set(arr)
    for(const index of nums)
    {
        if(set.has(nums[index] - 1))
        {
            arr[index] = Number.MAX_VALUE
        }
    }

    for(const num of arr)
    {
        
        if(num !== Number.MAX_VALUE){
            let ans = 1
            let prev = num
            while(set.has(prev + 1))
            {
                ans++
                prev++
            }

            res = Math.max(res,ans)

        }
    }

    return res

}
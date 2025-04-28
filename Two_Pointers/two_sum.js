// Two Integer Sum II

// Given an array of integers numbers that is sorted in non-decreasing order.

// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

// There will always be exactly one valid solution.


// Example 1:

// Input: numbers = [1,2,3,4], target = 3

// Output: [1,2]

function twoSum(numbers, target) {

    let s = 0
    let e = numbers.length - 1
    while(s < e)
    {
       const sum = numbers[s] + numbers[e]
       if(sum === target)
       return [s + 1, e + 1]
       if(sum < target)
       s++
       else 
       e--
    }
}

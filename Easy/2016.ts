//2016. Maximum Difference Between Increasing Elements
/*
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    Problem Overview: Find maximum difference between two elements i, j such that i < j and nums[i] < nums[j].

    Approach: Array
    - We keep track of the minimum value seen so far as we iterate through the array.
    - For each element, if it is greater than the minimum, we calculate the difference and update the result.
    - If it is less than the minimum, we update the minimum.
    - The result is the maximum difference found.
*/
function maximumDifference(nums: number[]): number {
    let res = -1;
    let premin = nums[0];

    for(let i of nums) {
        if(i < premin) premin = i;
        else if(i > premin) res = Math.max(res, i - premin);
    }

    return res;
};
//2966. Divide Array Into Arrays With Max Difference 
/*
    Time Complexity: O(n log n)
    Space Complexity: O(n)
    
    Problem Overview: Divide array into n / 3 arrays such that maximum difference between any two elements in each array is at most k.

    Approach: Sort, Array
    - To minimize the maximum difference, sort the array and group elements in triplets.
    - If the difference between the first and last element of each triplet exceeds k, it is impossible in any ways to divide the array as required.
    - Return the triplets if all conditions are satisfied.
*/
function divideArray(nums: number[], k: number): number[][] {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i + 2] - nums[i] > k)
            return [];
        res.push([nums[i], nums[i + 1], nums[i + 2]]);
    }
    return res;
};
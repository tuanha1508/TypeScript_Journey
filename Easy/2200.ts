//2200. Find All K-Distant Indices in an Array
/*
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    Problem Overview: find index that satisfy that |i - j| <= k where nums[j] == key, return all such indices.

    Approach: Array, Twopointer.
    - Iterate through the array, for each index i where nums[i] == key, calculate the range of indices that are k distant from i.
    - Use a variable to track the last added index to avoid duplicates.
    - Push all valid indices into the result vector.
    - Return the result vector.
*/
function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    const res: number[] = [];
    let r = 0;
    const n = nums.length;
    for (let j = 0; j < n; ++j) {
        if (nums[j] === key) {
            const l = Math.max(r, j - k);
            r = Math.min(n - 1, j + k) + 1;
            for (let i = l; i < r; ++i) {
                res.push(i);
            }
        }
    }
    return res;
}
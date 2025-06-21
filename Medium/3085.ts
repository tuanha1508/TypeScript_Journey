//3085. Minimum Deletions to Make String K-Special
/*
    Time Complexity: O(n + C^2)
    Space Complexity: O(n)
    
    Problem Overview: Make the difference between every pair of characters in the string at most k.

    Approach: Map, Count, Array, Brute Force
    - Try for each unique character in the string, calculate the number need to deletion if we choose frequency for this character is the minimum.
    - Find the minimum each trial.
    - Return the minimum result.
*/

function minimumDeletions(word: string, k: number): number {
    const cnt = new Map<string, number>();
    for(const ch of word) {
        cnt.set(ch,(cnt.get(ch) || 0) + 1);
    }
    let res = word.length;
    for(const i of cnt.values()) {
        let curr = 0;
        for(const j of cnt.values()) {
            if(i > j) curr += j;
            else if(j > i + k) curr += j - (i + k);
        }
        res = Math.min(res, curr);
    }
    return res;
};
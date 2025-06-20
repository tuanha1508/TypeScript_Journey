//3443. Maximum Manhattan Distance After K Changes
/*
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    Problem Overview: Find the maximum Manhattan distance after making at most k changes to the string s, where each change can replace a character with any of 'N', 'S', 'E', or 'W'.

    Approach: Greedy, Array
    - At each step, efficient change that we change min(k, i) characters and result in distance can gain 2 * k or i + 1 - distance. 
    - Keep track of the counts of 'N', 'S', 'E', and 'W' as we iterate through the string.
    - Calculate the current Manhattan distance and update the result accordingly.
    - Return the maximum distance found.
*/

function maxDistance(s: string, k: number): number {
    let res = 0, north = 0, south = 0, east = 0, west = 0, curr = 0;
    for(let i = 0 ; i < s.length ; i++) {
        if(s[i] == 'S') south++;
        if(s[i] == 'N') north++;
        if(s[i] == 'E') east++;
        if(s[i] == 'W') west++;

        curr = Math.abs(south - north) + Math.abs(east - west);
        res = Math.max(res, curr + Math.min(2 * k, i + 1 - curr));
    }
    return res;
};
//3442. Maximum Difference Between Even and Odd Frequency I
/*
    Time Complexity: O(s.size())
    Space Complexity: O(26)
    
    Problem Overview: Find the max odd frequency and min even frequency of characters in the string.

    Approach: Array, String
    - Count the frequency of each character in the string.
    - Track the maximum odd frequency and minimum even frequency.
    - Return the difference between the maximum odd frequency and minimum even frequency.
*/
function maxDifference(s: string): number {
    let m : number[] = new Array(26).fill(0);

    let odd = 1;
    let even = 102;

    for(let i of s) {
        const idx = i.charCodeAt(0) - 'a'.charCodeAt(0);
        m[idx] += 1;
    }

    for(let i of m) {
        if(i & 1) 
            odd = Math.max(odd, i);
        else if(i != 0) 
            even = Math.min(even, i);    
    }

    return odd - even;

};
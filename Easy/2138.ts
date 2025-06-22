//2138. Divide a String Into Groups of Size k
/*
    Time Complexity: O(n)
    Space Complexity: O(1)
    
    Problem Overview: Distribute string into groups of size k, if the last group is not full, fill it with a given character.

    Approach: String
    - Calculate to know if the last group is full or not.
    - Add the fill character into initial string until the size if a multiple of k
    - Use substr to get each group of size k.
    - Return the result.
*/

function divideString(s: string, k: number, fill: string): string[] {
    const res: string[] = [];
    const n = s.length;
    let curr = 0;
    while (curr < n) {
        const end = Math.min(curr + k, n);
        res.push(s.slice(curr, end));
        curr += k;
    }
    const last = res[res.length - 1];
    if (last.length < k) {
        res[res.length - 1] = last + fill.repeat(k - last.length);
    }
    return res;
}
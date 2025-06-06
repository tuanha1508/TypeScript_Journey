//2434. Using a Robot to Print the Lexicographically Smallest String
/*
    Time Complexity: O(n * 26)
    Space Complexity: O(n)
    
    Problem Overview: 
    - Given two operations:
        1. Move the first character from string 's' to string 't'.
        2. Move the last character from string 't' to the result.
    - Find the lexicographically smallest result string.

    Approach: Stack, Greedy
    - First In Last Out (FILO) -> Stack Pattern
    - Use a stack representing the characters moved from 's' to 't'
    - With each step, check the top of the stack with the smallest character in the rest of 's'
    - Keep adding the top of the stack to the result string until the top of the stack is not smaller than the smallest character in the rest of 's'.
    - Return the result string.
*/

function robotWithString(s: string): string {
    let cnt: number[] = new Array(26).fill(0);
    for (let c of s) {
        cnt[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    let stack: string[] = [];
    let res: string[] = [];
    let minCharacter: string = "a";
    for (let c of s) {
        stack.push(c);
        cnt[c.charCodeAt(0) - "a".charCodeAt(0)]--;
        while (
            minCharacter !== "z" &&
            cnt[minCharacter.charCodeAt(0) - "a".charCodeAt(0)] === 0
        ) {
            minCharacter = String.fromCharCode(minCharacter.charCodeAt(0) + 1);
        }
        while (stack.length > 0 && stack[stack.length - 1] <= minCharacter) {
            res.push(stack.pop()!);
        }
    }

    return res.join("");
}
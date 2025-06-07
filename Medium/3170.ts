//3170. Lexicographically Minimum String After Removing Stars
/*
    Time Complexity: O(n * 26)
    Space Complexity: O(n)
    
    Problem Overview:
    Given string s:
    - Remove all characters that are stars '*'.
    - For each character '*' removed, remove the smallest character on the left of the start. 
    - Return the lexicographically smallest string possible after all removals.

    Approach: Stack, String
    - We use a stack to keep track of the indices of characters in the string.
    - For each character in the string:
        - If it is not a star, we push its index onto the stack.
        - If it is a star, we pop the top of the stack (which gives us the index of the smallest character) and mark that position as a star.
    - Finally, we construct the result string by skipping all the stars.
*/
function clearStars(s: string): string {
    const cnt: number[][] = Array(26)
        .fill([])
        .map(() => []);
    const arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "*") {
            cnt[arr[i].charCodeAt(0) - "a".charCodeAt(0)].push(i);
        } else {
            for (let j = 0; j < 26; j++) {
                if (cnt[j].length > 0) {
                    arr[cnt[j].pop()!] = "*";
                    break;
                }
            }
        }
    }
    return arr.filter((c) => c !== "*").join("");
}
//2081. Sum of k-Mirror Numbers
/*
    Time Complexity: O(sqrt(10^10))
    Space Complexity: O(1)
    
    Problem Overview: Sum all the number from 1 to n, that the number should be a palindrome when converted to base k. 

    Approach: Math, Enumerator
    - Instead of check all the number from 1 to n, we can generate half of the palindrome and then mirror it to get the full palindrome.
    - Then check if the number is a palindrome in base k.
    - Return the sum of all the k-mirror numbers. 
*/
function kMirror(k: number, n: number): number {
    const digit: number[] = new Array(100);
    let left = 1,
        count = 0,
        ans = 0n;
    while (count < n) {
        const right = left * 10;
        for (let op = 0; op < 2; ++op) {
            for (let i = left; i < right && count < n; ++i) {
                let combined = BigInt(i);
                let x = op === 0 ? Math.floor(i / 10) : i;
                while (x > 0) {
                    combined = combined * 10n + BigInt(x % 10);
                    x = Math.floor(x / 10);
                }
                if (isPalindrome(combined, k, digit)) {
                    ++count;
                    ans += combined;
                }
            }
        }
        left = right;
    }
    return Number(ans);
}

function isPalindrome(x: bigint, k: number, digit: number[]): boolean {
    let length = -1;
    while (x > 0n) {
        ++length;
        digit[length] = Number(x % BigInt(k));
        x /= BigInt(k);
    }
    for (let i = 0, j = length; i < j; ++i, --j) {
        if (digit[i] !== digit[j]) {
            return false;
        }
    }
    return true;
}
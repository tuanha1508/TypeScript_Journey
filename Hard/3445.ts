//3445. Maximum Difference Between Even and Odd Frequency II
/*
    Time Complexity: O(n * Sigma^2)
    Space Complexity: O(1)
    
    Problem Overview: find the maximum difference between the odd frequency and even frequency in substrings have size of at least 'k'

    Approach :

    - Enumerate all pairs of characters `a` and `b` (digits 0-4) where `a` ≠ `b` to find optimal odd/even frequency combination
    - Use two-pointer technique with `left` and `right` pointers to explore all valid substrings of length ≥ `k`
    - Track counts `cnt_a`, `cnt_b` for current substring and `prev_a`, `prev_b` for prefix up to `left` pointer
    - Encode parity states as 2-bit numbers: `(count_a % 2) << 1 | (count_b % 2)` for efficient state management
    - Maintain `best[]` array storing minimum `prev_a - prev_b` values for each of the 4 possible parity states
    - Advance `left` pointer only when substring length ≥ `k` and `b` appears even times (≥ 2 occurrences)
    - Update `best[left_status]` with current `prev_a - prev_b` before moving `left` pointer forward
    - For each `right` position, calculate answer using target state `10` (odd `a`, even `b`) via XOR operation
    - Compute difference `(cnt_a - cnt_b) - best[right_status ^ 0b10]` to maximize odd-even frequency difference
    - Return maximum difference found across all character pairs and valid substring positions
*/
function maxDifference(s: string, k: number): number {
    const n = s.length;
    let ans = -Infinity;

    const getStatus = (cnt_a: number, cnt_b: number): number => {
        return ((cnt_a & 1) << 1) | (cnt_b & 1);
    };

    for (const a of ["0", "1", "2", "3", "4", "5"]) {
        for (const b of ["0", "1", "2", "3", "4", "5"]) {
            if (a === b) {
                continue;
            }
            const best: number[] = [Infinity, Infinity, Infinity, Infinity];
            let cnt_a = 0,
                cnt_b = 0;
            let prev_a = 0,
                prev_b = 0;
            let left = -1;
            for (let right = 0; right < n; right++) {
                cnt_a += s[right] === a ? 1 : 0;
                cnt_b += s[right] === b ? 1 : 0;

                while (right - left >= k && cnt_b - prev_b >= 2) {
                    const left_status = getStatus(prev_a, prev_b);
                    best[left_status] = Math.min(
                        best[left_status],
                        prev_a - prev_b,
                    );
                    left++;
                    prev_a += s[left] === a ? 1 : 0;
                    prev_b += s[left] === b ? 1 : 0;
                }

                const right_status = getStatus(cnt_a, cnt_b);
                if (best[right_status ^ 0b10] !== Infinity) {
                    ans = Math.max(
                        ans,
                        cnt_a - cnt_b - best[right_status ^ 0b10],
                    );
                }
            }
        }
    }
    return ans;
}
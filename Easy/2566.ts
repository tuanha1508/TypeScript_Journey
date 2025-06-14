//2566. Maximum Difference by Remapping a Digit
/*
    Time Complexity: O(1)
    Space Complexity: O(1)
    
    Problem Overview: Change one digit in a number to maximize the difference between the maximum and minimum numbers.

    Approach: Greedy, Math
    - Greedy : maximum number is obtained by changing the first non-9 digit to 9 -> maximun value
    -          minimum number is obtained by changing the first non-minimum digit to 0 -> minimum value
    - Iterate through the digits of the number, find the first digit that is not 9 for maximum.
    - For minimum, find the first digit change.
    - Construct the maximum and minimum numbers by replacing the digits accordingly.
    - Finally, return the difference between the maximum and minimum numbers.
*/
function minMaxDifference(num: number): number {
    let s = num.toString();
    let t = s;
    let pos = 0;
    while (pos < s.length && s[pos] === "9") {
        pos++;
    }
    if (pos < s.length) {
        s = s.replace(new RegExp(s[pos], "g"), "9");
    }
    t = t.replace(new RegExp(t[0], "g"), "0");
    return parseInt(s) - parseInt(t);
}
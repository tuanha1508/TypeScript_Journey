//1432. Max Difference You Can Get From Changing an Integer
/*
    Time Complexity: O(n) 
    Space Complexity: O(n)
    
    Problem Overview: In two operations : 
    - Change one digit of the number to any digit from 0 to 9.
    - Replace all occurrences of a digit with choosen digit.
    - Find the maximum difference between two numbers that can be obtained by performing the above operations.

    Approach: Math, Greedy
    - Convert the number to a string to easily manipulate its digits.
    - For the maximum number, replace the first non-9 digit with 9.
    - For the minimum number, replace the first non-0 digit with 0 (if it's not the first digit) or 1 (if it is the first digit).
    - Calculate the difference between the maximum and minimum numbers obtained.
*/
function maxDiff(num: number): number {
    const change = (x: number, y: number): string => {
        let numStr = num.toString();
        let res = "";
        for (let digit of numStr) {
            if (parseInt(digit) === x) {
                res += y.toString();
            } else {
                res += digit;
            }
        }
        return res;
    };

    let minNum = num;
    let maxNum = num;
    for (let x = 0; x < 10; ++x) {
        for (let y = 0; y < 10; ++y) {
            let res = change(x, y);
            if (res[0] !== "0") {
                let resI = parseInt(res);
                minNum = Math.min(minNum, resI);
                maxNum = Math.max(maxNum, resI);
            }
        }
    }

    return maxNum - minNum;
}
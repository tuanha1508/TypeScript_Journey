//1061. Lexicographically Smallest Equivalent String
/*
    Time Complexity: O(n + m * 26)
    Space Complexity: O(n + 26)
    
    Problem Overview: 
    - Given two strings s1 and s2, and a string baseStr
    - Given that each character in s1 === each character in s2, mean that it can replact for each other
    - You need to find the lexicographically smallest equivalent string of baseStr

    Approach: DFS, Union-Find
    - Create initial graph with s1 and s2 that mean s1[i] can be replaced with s2[i] and vice versa
    - DFS all characters can replace with baseStr[i], find the smallest character
    - Append the smallest character to result string
    - Return the result string
*/
function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    let root : string[] = Array(26);
    for (let i = 0; i < 26; i++){
        root[i] = String.fromCharCode(97 + i);
    }
    function find (x : string): string {
        if (root[x.charCodeAt(0) - 97] !== x){
            root[x.charCodeAt(0) - 97] = find(root[x.charCodeAt(0) - 97]);
        }
        return root[x.charCodeAt(0) - 97];
    }
    function unionSet(x : string, y : string): void {
        let r1 = find(x);
        let r2 = find(y);
        if (r1 !== r2){
            if (r1 < r2){
                root[r2.charCodeAt(0) - 97] = r1;
            } else {
                root[r1.charCodeAt(0) - 97] = r2;
            }
        }
    }
    for (let i = 0; i < s1.length; i++){
        unionSet(s1[i], s2[i]);
    }
    let res = "";
    for (let i = 0; i < baseStr.length; i++){
        res += find(baseStr[i]);
    }
    return res;
};
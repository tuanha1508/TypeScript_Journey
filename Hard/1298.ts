//1298. Maximum Candies You Can Get from Boxes
/*
    Time Complexity: O(n)
    Space Complexity: O(n)
    
    Problem Overview: 
    - Given n boxes, each box has a status (open or closed), a number of candies.
    - Some boxes require keys to open, and containedBoxes may contain other boxes.
    - You can open boxes that are open or you have keys for, and you can get candies from them.
    - Return the maximum number of candies you can get.

    Approach: BFS, Graph
    - Use a queue to perform BFS on the boxes.
    - Call ownBox to track which boxes you own.
    - Call ownKey to track which keys you have.
    - Call checkBox to track which boxes have been checked.
    - Iterate and check boxes, keys, and candies to create initial queue.
    - In queue, check the box :
        1. If the box has been checked, continue.
        2. Add candies to the result.
        3. Mark the box as checked.
        4. Add contained boxes to ownBox.
        5. Add keys to ownKey.
        6. Check all boxes and add them to the queue if they are not checked, you have keys, and you own them.
    - Return the total candies collected.
*/
function maxCandies(status: number[], candies: number[], keys: number[][], containedBoxes: number[][], initialBoxes: number[]): number {
    let res : number = 0;
    const n : number = status.length;
    const dq : number[] = []
    let ownBox : number[] = new Array(n).fill(0);
    let ownKey : number[] = new Array(n).fill(0);
    let checkBox : number[] = new Array(n).fill(0);

    for(let i = 0 ; i < n ; i++) ownKey[i] = status[i];
    for(const i of initialBoxes) {
        ownBox[i] = 1;
        if(ownKey[i]) dq.push(i);
    }

    while(dq.length > 0) {
        const u : number = dq.shift()!;
        if(checkBox[u]) continue;

        res += candies[u];
        checkBox[u] = 1;

        for(const i of containedBoxes[u]) {
            ownBox[i] = 1;
            if(!checkBox[i] && ownKey[i]) dq.push(i);
        }
        
        for(const i of keys[u]) {
            ownKey[i] = 1;
            if(!checkBox[i] && ownBox[i]) dq.push(i);
        }
    }
    return res;
};
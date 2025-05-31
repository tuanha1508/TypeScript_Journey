// 909. Snakes and Ladders
/*
    Time Complexity: O(n^2)
    Space Complexity: O(n^2)
    
    Problem Overview: Find the minimum of move to the cell n * n in a board

    - Call v is the number of rows and columns in the board
    - For this problem, we can use a BFS approach to find all the shortest paths from the start to the end.
    - We will use a queue to store the current position and then we iterate through all the possible moves (For this problem is from 1 to 6)
    - Call step is the next position we can move to and we will check if the position is a snake or a ladder.
    - We calculate next row and column suitable for the current step.
    - After that, call variable check is the value of the cell we can move to, if it equal v * v, we return the number of moves. 
    Else, if the res check is -1, we update the res check with res curr + 1 and push the check into the queue.
    - After all, if we cannot reach the end, we return -1.
*/
const Dice = [1, 2, 3, 4, 5, 6];
function snakesAndLadders(board: number[][]): number {
    const n = board.length;
    const visited = new Set<number>();

    let queue: number[] = [1];
    let curr = 1;

    while(queue.length > 0) {
        const pending: number[] = [];

        while(queue.length > 0) {
            const i = queue.shift()!;
            for(const dice of Dice) {
                let step = dice + i;
                const val = getValue(board, step);
                if(val !== -1) 
                    step = val;
                if(visited.has(step) || step > n * n) continue;
                if(step === n * n) return curr;
                visited.add(step);
                pending.push(step);
            }
        }
        queue = pending;
        curr++;
    }
    return -1;
};

function getValue(board: number[][], step: number): number {
    const pos = step - 1;
    const n = board.length;
    const rowFromBottom = Math.floor(pos / n);
    const row = n - 1 - rowFromBottom;

    const offset = pos % n;
    const isBackwards = rowFromBottom % 2 === 1;

    const col = isBackwards ? n - 1 - offset : offset;
    
    return board[row]?.[col];
}
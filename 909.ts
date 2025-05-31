// 909. Snakes and Ladders
// https://leetcode.com/problems/snakes-and-ladders/
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
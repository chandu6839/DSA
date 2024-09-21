/* problems searching for a set of solutions or which require an optional solution can be solved under backtracking.
*/

// COmbiantion sum [2,3,6,7],7
const combinationSum = (c, t) => {
    const r = [];
    const backTrack = (s,t,p) => {
        console.log(s,t,p);
        if (t===0) { r.push([...p]); return;}
        if (t < 0) { return; }
        for (let i = s; i < c.length; i++) {
            p.push(c[i]);
            backTrack(i,t-c[i],p);
            p.pop();
        }
    }
    backTrack(0,t,[])
    return r;
}
var combinationSum2 = function(candidates, target) {
    let res = [];
    let sol = [];
    let nums = candidates;
    let n = nums.length;
    const backtrack = (i, sum) => {
        if(sum === target){
            res.push(sol.slice());
            return;
        }

        if(i === n || sum > target) return;

        // Consider the number;
        sol.push(nums[i])
        backtrack(i, nums[i] + sum);
        sol.pop();

        // Don't consider the number
        backtrack(i + 1, sum)
    }
    backtrack(0, 0);
    return res;
};
//N Queen's
const nQueens = (n) => {
    const sol = [];
    const boardFn = (n) => Array(n).fill().map(()=>Array(n).fill('.'));
    const board = boardFn(n);
    const isSafe = (board, row, col) => {
        //check col
        for(let i=0; i<row; i++){
            if(board[i][col] == 'Q') return false;
        }
        //check upper-left diagonal
        for(let i=row, j=col; i>=0 && j>=0; i--, j--){
            if(board[i][j] == 'Q') return false;
        }
        //check upper-right diagonal
        for(let i=row, j=col; i>=0 && j<n; i--, j++){
            if(board[i][j] == 'Q') return false;
        }
        return true;
    }
    const place = (row) => {
         if (row === n) {
          // If all queens are placed, add the solution to the results
          const solution = board.map(row => row.join(''));
          sol.push(solution);
          return;
        }
        for (let col = 0; col < n; col++) {
            if(isSafe(board, row, col)){
                board[row][col] = 'Q';
                place(row + 1);
                board[row][col] = '.';
            }
        }
    }
    place(0);
    return sol;
}

//Word search [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]] "ABCCED"

const exist = (board,word) => {
    const m = board.length;
    const n = board[0].length;
    
    const backTrack = (i, j, k) => {
        if(k===word.length) return true;
        if(i<0 || j<0 || i>=m || j>=n || board[i][j] !== word[k]) return false;
        
        const temp = board[i][j];
        board[i][j]= '#';
        const f = backTrack(i+1,j,k+1) || backTrack(i-1,j,k+1) || backTrack(i,j+1,k+1) || backTrack(i,j-1,k+1);
        board[i][j]= temp;
        return f;
        
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(backTrack(i,j,0)) return true;
        }
    }
    return false;
}


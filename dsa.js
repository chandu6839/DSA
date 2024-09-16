//fibonacci Serice
const fibonacciSerice = (n) => {
    let f =[];
    for(let i=0; i < n; i++){
        f.push((i > 1) ? f[i-1] + f[i-2] : i);
    }
    return f;
}

//recursion
const fibonacci = (n) => (n<=1) ? n: fibonacci(n-1) + fibonacci(n-2);

//Sub Strings
const subStr = (str) => {
    const subStrs = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            subStrs.push(str.slice(i,j));
        }
    } return subStrs;
}

//factorial
const factorial = (n) => {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    } return result;
}

//factorial recursion
const factorialRecursive = (n) => {
    if(n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}

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

//consecutive SubString
function SubstringFunction(input) {
    if (input.length === 0) return [''];
    let first = input[0];
    let restSubstrings = SubstringFunction(input.slice(1));
    let substrings = restSubstrings.map(sub => first + sub);
    return [...substrings, ...restSubstrings];
}

// All possible ways of string
const apstr=(str) => {
    if(str.length === 2) return pstr(str)
    let temp = apstr(str.slice(1));
    for (let index = 0; index < temp.length; index++) {
        
    }
    return temp;
}
const pstr = (str) => {
    if(str.length === 2) return [str, str[1]+str[0]];
}
//Subsets
const subsets1 = function(arr) {
    if(arr.length === 0 ) return [];
    const f = arr.splice(0,1);
    const re = subsets(arr);
    let r=[];
    if(re.length === 0) {
        r = f;
    }
    else {
        for (let i = 0; i < re.length; i++) {
            if(Array.isArray(re[i])){
                r.push([...re[i], f[0]]);
            }
            else {
                r.push([re[i], f[0]]); 
            }
        }
    }
    return (re.length === 0) ? [re, r] : [...re, ...r]
};

//Subsets
var subsets = function(arr) {
    if(arr.length === 0 ) return [];
    const f = arr.splice(0,1);
    const re = subsets(arr);
    let r = re.length === 0 ? f : re.map((i)=> [...i, ...f]) ;
    return (re.length === 0) ? [re, r] : [...re, ...r]
};


//Steps
var climbStairs = function(n) {
    let ways = [1, 2];
    
    for (let i = 2; i < n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2]
    }

    return ways[n - 1]
};
const allComb = (arr) => {
    console.log(arr)
    //return arr;
}
const twoSteps = (n) => {
    if(n <= 2) return n;
    let result = 0;
    const r = Math.floor(n/2);
    for (let i = r; i >= 0; i--) {
        result += getPermutations(Array(i).fill(2).concat(Array(n-2*i).fill(1))).length;
    }
    return result;
}
function getPermutations(input) {
    // Base case: If the input is empty, return an array with a single empty array.
    if (input.length === 0) return [[]];

    // Base case: If there's only one element, return it as the only permutation.
    if (input.length === 1) return [input];

    // This will store the final list of permutations.
    let permutations = [];

    // Iterate through each element in the input.
    for (let i = 0; i < input.length; i++) {
        const currentElem = input[i];
        
        // To prevent duplicate permutations, skip iterations where the current element
        // is the same as the previous one. This assumes the input is sorted for duplicate checks.
        if (i > 0 && input[i] === input[i - 1]) continue;

        // Get a new array excluding the current element.
        const remainingInput = [...input.slice(0, i), ...input.slice(i+1)];

        // Recursively get the permutations of the remaining elements.
        const remainingPermutations = getPermutations(remainingInput);

        // Combine the current element with each of the permutations of the remaining elements.
        for (let perm of remainingPermutations) {
            permutations.push([currentElem, ...perm]);
        }
    }

    // Return the generated permutations.
    return permutations;
}






























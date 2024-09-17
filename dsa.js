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
//46. Permutations
const permute = (nums) => {
    const n = nums.length;
    if(n === 0 ) return [[]];
    if(n === 1 ) return [nums];
    let permutations = [];
    for (let i = 0; i < n; i++) {
        const current = nums[i];
        if(i > 0 && nums[i] === nums[i-1]) continue;
        const remaining = [...nums.slice(0,i), ...nums.slice(i+1)];
        const remainingpernutations = permute(remaining);
        for (let ele of remainingpernutations) {
            permutations.push([current, ...ele]);
        }
    }
    return permutations;
}
//72 Longest Consecutive Sequence [Solution]
const longestConsecutive = (nums) => {
    const n = nums.length;
    if(n === 0 ) return 0;
    const hasSet = Array.from(new Set(nums.sort((a,b)=>a-b)));
    let longSteak = 0;
    let counter = 0;
    for (let i = 0; i < hasSet.length; i++) { console.log(hasSet[i]);
        if(hasSet[i+1] - hasSet[i] === 1){
            counter ++;
        }
        else {
            longSteak = Math.max(longSteak, counter);
            counter = 0;
            }
        }
        //return longSteak !== 0 ? longSteak + 1 : 0;
        return !longSteak&&longSteak || longSteak + 1;
    }


//27  Remove Element (nums, val)
var removeElement = function(nums, val) {
    const n = nums.length;
    let i = 0;
    while (i < n) {
        if(nums[i] === val) {
            nums.splice(i,1)
        }else{
            i++
        }
    }
    return nums.length;
};

//26 removeDuplicates
var removeDuplicates = function(nums) {
    //const n = nums.length;
    let i = 0;
    while (i < nums.length ) {
        console.log(i, nums)
        let x = nums.splice(i,1);
        if(nums.indexOf(x[0]) === -1) {
            nums[i] = x[0];
        }
        i++;
    }
    return nums;//.length;//.concat(Array(counter).fill('_'))
};

//Plus one Array.from(String(BigInt(digits.join(""))+BigInt(1)),Number)
var plusOne = function(digits) {  
    for (let i = digits.length - 1; i >= 0 ; i--) {
        if(digits[i] < 9){
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};























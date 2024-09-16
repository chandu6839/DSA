
//Two pointers for Palindrome
const palindrome = (str) => {
    let start = 0;
    let end = str.length - 1;
    while(start < end) {
        console.log(start, end);
        if(str[start] != str[end]){
            return false;
        }
        start += 1;
        end -= 1;
    }
    return true;
}

//Sliding window for subset size of 'K' with max number
const maxSubArrSum = (arr, k) => {
    let current = 0;
    let res = 0;
    for(let i = 0; i < k; i++) {
        console.log(current, i);
        current += arr[i];
    }
    res = current;
    console.log(current);
    for(let i = k; i < arr.length; i++) {
        current += arr[i] - arr[i - k];
        res = Math.max(res, current);
        console.log(current, res, arr[i], arr[i - k]);
    }
    return res;
}

//Fast and Slow Pointers
// link list reversal
//Monotonic Stack
// heap
const heapPush = (heap, newKey) => {
    heap.push(newKey);
    let current = heap.length - 1;
    while(current > 0) {
        let parent = Math.floor((current - 1)/2);
        if(heap[current] > heap[parent]){
            [heap[current], heap[parent]] = [heap[parent], heap[current]];
            current = parent;
        } else {
            break;
        }
    }
}

const heapPop = (heap) => {
    const n = heap.length;
    [heap[0],heap[n - 1]] = [heap[n - 1],heap[0]]
    const removedKey = heap.pop();
    let current = 0;
    while(2 * current + 1 >  heap.length){
        const leftIndex = 2 * current + 1;
        const righttIndex = 2 * current + 2;
        const minChildIndex = (righttIndex < heap.length && righttIndex < leftIndex) ? righttIndex : leftIndex;
        if(heap[minChildIndex] < heap[current]){
        [heap[minChildIndex], heap[current]] = [heap[current], heap[minChildIndex]];
        current = minChildIndex;
        } else {
            break
        }
    } 
    return removedKey;
}

const percolatedown = (heap, index) => {
    const current = index;
    while (2 * current + 1 < heap.length) {
        const leftIndex = 2 * current + 1;
        const rightIndex = 2 * current + 2;
        const minIndex = (rightIndex < heap.length && heap[rightIndex] < heap[leftIndex]) ? rightIndex : leftIndex;
        if(heap[minIndex] < heap[current]){
            [heap[minIndex], heap[current]]=[heap[current], heap[minIndex]]
            current = minIndex;
        }else {
            break;
        }
    }
    
}

const heapify = (arr) => {
    const last = Math.floor(heap.length/2 - 1);//parent node's index
    const heap = [];
    //for(let item of arr){
    for(let i = 0; i < last; i++){
        //heapPush(heap, item);
        percolatedown(heap, item)
    }
    return heap;
}

//PrefixSum

//Longest increasing subsequence of Array
const lengthOfLIS = (nums) => {
    if (nums.length === 0) return 0;
    const n = nums.length;
    const dp = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j=0; j< i; j++){
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[i] + 1);
            }
        }
    }
    return Math.max(...dp)
}

//pwwkew pwke subSequence wke subString of String
const lls = (s) => {
    const charset = new Set();
    let left = 0;
    let maxLength = 0;
    const n = s.length;

    for (let right = 0; right < n; right++) {
        while (charset.has(s[right])) {
            charset.delete(s[left]);
            left++;
        }
        charset.add(s[right])
        maxLength = Math.max(maxLength, right -left + 1);
    }
    return maxLength;
}

// Longest Palindromic Substring
const lPalindrome = (s) => {
    if(s.length === 0 ) return '';
    let start = 0; 
    let maxLength = 1;

    function helper(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right -left - 1;
    }

    for (let i = 0; i < s.length ; i++) {
        let l1 = helper(i, i); // for odd
        let l2 = helper(i, i+1); // for even
        let len = Math.max(l1,l2);
        if(len > maxLength) {
            maxLength = len;
            start = i - Math.floor((len - 1)/2);
        }
    }

    return s.substring(start, start + maxLength);
}

//Minwindow of subString
const minWindowSubStr = (s,t) => {
    if(s.length === 0 || t.length === 0 ) return "";

    let tfreq = {};
    let windowFreq = {};

    for (let char of t) {
        tfreq[char] = (tfreq[char]  || 0) + 1;
    }
    let h=0,r=0, l=0, minLength=Infinity, need = Object.keys(tfreq).length, rs=[-1,-1];
    
    while (r <= s.length) {
        let charR = s[r]
        windowFreq[charR] = (windowFreq[charR] || 0) + 1;

        if(tfreq[charR] && windowFreq[charR] === tfreq[charR]){
            h++;
        }
        while (h === need) {
            if((r - l + 1) < minLength){
                minLength = r - l + 1;
                rs = [l, r];
             }
            let charL = s[l];
            windowFreq[charL]--;
            if(tfreq[charL] && windowFreq[charL] < tfreq[charL]) {
                h--;console.log(windowFreq)
            }
            l++;
        }
        r++;
    }
    return minLength !== Infinity ? s.slice(rs[0], rs[1]+1): "";
}
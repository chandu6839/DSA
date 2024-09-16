//Linear Search
const linearSearch = (arr, target) => {
    const n = arr.length;
    for (let i=0; i<n; i++){
        console.log(arr[i], target, i);
        if (arr[i] === target) return i;
    } return -1;
}

//Binary Search
const binarySearch = (arr, target) => {
    let high = arr.length - 1;
    let low = 0;
    while (low <= high) {
        let mid = Math.floor(high + low / 2)
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    } return -1;
}

//Jump Search
const jumpSearch = (arr, target) => {
    let n = arr.length;
    let jump = Math.floor(Math.sqrt(n));
    let prev = 0;
    while (arr[jump] < target) {
        prev = jump;
        jump += Math.floor(Math.sqrt(n));
        if(prev >= n) return -1
    }
    for (let i = prev; i < jump; i++) {
        if(arr[i] === target) return i;
    }
    return -1;
}
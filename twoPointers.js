const fn1 = (arr, val)=> {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if(arr[left] === val) {
            left++;
        }
        if(arr[right] !== val) {
            right--;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
    }
    return arr;
}
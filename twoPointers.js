const fn1 = (arr, val)=> {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if(arr[left] === val && arr[right] !== val) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left++;
                right--;
            }
        if(left < right && arr[left] === val) {
              left++;  
            } 
        if(left < right && arr[right] !== val) {
           right--; 
        }
    }
    return arr;
}
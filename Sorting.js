//Bubble Sort, Selection Sort, Insertion Sort: O(n²)
//Merge Sort, Quick Sort, Heap Sort: O(n log n)

//Quick Sort
const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];
    for(let i=0; i < arr.length -1; i++) {
        if(arr[i] > pivot) rightArr.push(arr[i]);
        else leftArr.push(arr[i]);
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

//Merge Sort
const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right))
}

const merge = (left,right) =>{
    let res = [], leftIndex = 0, rightIndex =0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex]<right[rightIndex]) {res.push(left[leftIndex]);leftIndex++}
        else {res.push(right[rightIndex]); rightIndex++}
    }
    return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
} 

//Heap Sort
const heapify = (arr, n, i) => {
    let largest = i ;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    console.log(left, right, i);
    if(left < n && arr[left] > arr[largest]) largest = left;
    if(right < n && arr[right] > arr[largest]) largest = right;
    if(largest !== i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    } 
}
const heapSort = (arr) => {
    const n = arr.length;
    for (let i = Math.floor(n/2) - 1;i>=0; i--) {
        console.log(i)
        heapify(arr, n, i);
    }
    console.log(arr);
    for (let i = n - 1;i>0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr, i, 0);
    }
    return arr;
}

//bubble Sort
const bubbleSort = (arr) => {
    const n = arr.length;
    let swap;
    for(let i = 0; i < n -1; i++){
        swap = false;
        //console.log(i, 'i');
        for(let j = 0; j < n -i -1; j++){
            //console.log(j, 'j', arr[j] , arr[j + 1]);
            if(arr[j] > arr[j + 1]) {
                console.log(j, 'j');
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swap = true;
            }
        }
        if(!swap) break;
    }
    return arr;
}

//selection Sort
const selectionSort = (arr) => {
    const n = arr.length;
    for (let i=0; i<n-1; i++){
        let minIndex=i;
        for (let j=i+1; j<n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]]=[arr[minIndex], arr[i]]
    }
    return arr;
}

//Insertion Sort
const insertionSort1 = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j= i - 1;
        let key = arr[i];
        while (j>=0 && arr[j]>key) {
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key; 
    }
    return arr;
}
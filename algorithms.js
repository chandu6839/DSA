//Algorithms
const fn1 = (arr1,arr2) => {
    for (let i = 0; i < a1.length; i++) {
        let item = "NO";
        for (let c of a1[i]) {
            console.log(c)
            if(a2[i].includes(c)){
                item = "YES";
                break;
            }
        }
        console.log(item);
    }
}

const fn2 = (arr1,arr2) => {
    for (let i = 0; i < a1.length; i++) {
        let item = "No";
        let set = new Set(a2[i])
        for (let c of a1[i]) {
            if(set.has(c)){
                item = "Yes";
                break;
            }
        }
        console.log(item);
    }
}
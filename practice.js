//Clouser
function outer() {
    var count = 0;
    return function() {
        count += 1 
        console.log(count)
    }
}
const clouserExample = outer()

//Hoisting
function hoist() {
    console.log(count) //undefined
    var count = 1;
}

function hoist() {
    console.log(count) //uncaught error
    //var count = 1;
}

//Lexical Scope or Static Scope
const outer = () => {
    const outrVar = 'outer Scope'
    const inner = () => {
        const innerVar = 'inner Scope'
        console.log(outer)
        console.log(inner)
    }
    inner()
}
outer()

//Set-timeout
setTimeout(()=>{console.log('execute after 2000'), 2000})
setInterval(()=>{console.log('execute after 2000'), 2000})

const str1 = 'abc'
const str2 = 'abc'
//Promises use three state pending, fullfiled and rejected
const promiseExample = new Promise((resolve, reject) => (str1 === str2) ? resolve(): reject())
//promise with then, catch and finally
promiseExample.then(()=>console.log('success')).catch(()=>console.log('failed'))
//async await
const test= async () => { try {const response = await promiseExample; console.log('success')} catch{ console.log('failed') }}

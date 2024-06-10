//promise.all

//this method takes an iterable of promises as an input and returns a single promies that resolves when all promises in iterable have resolved 
// or when iterable contains no promises, it rejects with the reason of first promise that rejects

const p1 = Promise.resolve(401);
const p2 = 42;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'foo')
})

Promise.all([p1,p2,p3]).then((val) => {console.log(val)})

//allsettled
const a = Promise.resolve(3);
const b = new Promise((resolve, reject) => {
    setTimeout(reject, 2000,'luffy')
})
Promise.allSettled([a,b]).then((res) => {
    console.log(res);
})

//.any-This method returns a promise that resolves as soon as one of the promises in the iterable resolves. It rejects if all of the promises in the iterable reject.
const pp = [
    Promise.reject("e1"),
    Promise.resolve("success"),
    Promise.get("ERROR")
]
Promise.any(pp).then((val)=>{
    console.log(val)
}).catch((error) => {
    console.log(error)
})

//race -This method returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.
const pp1 = new Promise((resolve) => setTimeout(resolve,1000,'one'));
const pp2 = new Promise((resolve) => setTimeout(resolve,100,'two')) ;
Promise.race([pp1,pp2]).then((val)=>{console.log(val)})

//resolve
const resolvedPromise = Promise.resolve(42);

resolvedPromise.then((val)=>{
    console.log(val)
})
//reject
const rejectPromised = Promise.reject('error')
rejectPromised.catch((rej)=>{
    console.log(rej)
})
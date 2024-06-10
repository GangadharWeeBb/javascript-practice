//async-await example and how it is diff form promise .then and catch
//in asyn-await.js we saw how normal promises are resloves, it waits 10secs in that exmaple

// const p = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("resolved")
//     },5000)
// })
// // async function handlePromise() {
// //     const val = await p //here it waits for 10secs
// //     console.log("hello")
// //     console.log(val);
// //     //what if have 2 awatis will wait 2times?
// //     const val2 = await p;
// //     console.log("hello");
// //     console.log(val2)
// // }
// // handlePromise();
// //after 10sec both promises will be resolved, i.e after 10sec both will print immediately


// //lets create a promies and then resolve two diff promises
// const p2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("promise is resolved by p2")
//     },2000)
// })

// // async function handlePromise1() {
// //     console.log("hi");
// //     const v1 = await p;
// //     console.log("hello1")
// //     console.log(v1);

// //     const v2 = await p2;
// //     console.log("hello2");
// //     console.log(v2)
// // }
// // handlePromise1();
// //code will run for 10sec after 10sec both promises will be resolves
// //even though p2 is resolved in 2sec , it will wait for p1 to get resolved

// //lets reverse the execution of promise 
// async function handlePromise3() {
//     console.log("hi");
//     const v11 = await p2;
//     console.log("hello3");
//     console.log(v11);

//     const v22 = await p;
//     console.log("hello3");
//     console.log(v22)
// }
// handlePromise3();
/**
 * Hi` printed instantly -> now code will wait for secs -> After 2 secs ('Hello3' 'Promise resolved value by p2!!') will get printed and
 *  in the subsequent second i.e. after 5 secs ('Hello3' 'Promise resolved value!!') will get printed
 */

/*
it appears like js engine is waiting but JS is not waiting over ther.
It is not occupied the call stack if that would have been the case our page will be frozen. so js engine is not waiting
Then what is it doing Lets see
*/

const pp = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolved by pp")
    },5000)
})
const pp2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolved by pp2")
    },10000)
})

async function handlePromise4() {
    console.log("hi");
    debugger;
    const a = await pp;
    console.log("luffy");
    debugger;
    console.log(a);

    const b = await pp2;
    console.log("zoro");
    debugger;
    console.log(b)
}
handlePromise4();

/*
CallStack flow() -> when ever it sees await where promise is suppose to be resolved, await keyword it suspend the execution of function till promise is resolved
so a gets resolved after 5sec and where it left it starts from there only and same repeats for b
*/

//example
async function hP() {
    const data = await fetch("https://api.github.com/users/GangadharWeeBb");
    const res = await data.json();
    console.log(res)
}
hP();


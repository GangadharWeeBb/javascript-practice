//async is a keyword used before function to create a async function
async function getData(){
    return "onepiece";
}
const dataPromise = getData();
console.log(dataPromise); //{fulfilled: }
//to extract data form above promise using then
dataPromise.then(res => console.log(res));

//another example
const p = new Promise((resolve, reject) => {
    resolve("promise resolved")
})
async function getData1() {
    return p;
}
//in above case, we already returing a promise async fun would simply return that instead of wrapping with a new Promise
const dataPromise1 = getData1()
console.log(dataPromise1); //{fulfilled}
dataPromise1.then(res=>console.log(res));

//how to use await
async function handlePromise() {
    const val = await p;
    console.log(val)

}
handlePromise()

//normal way of handlepromises
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved")
    },10000)
});
function getData2() {
    p1.then((res) => console.log(res))
    console.log("hello")
}
getData2();
//prints hello immediately
//after 10sec resloved is printed



function sum(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;
    }
    return ans;
}
function findSumTill100(){
    console.log(sum(100)) //prints after 2secs
}
setTimeout(findSumTill100, 2000);
console.log("Hello");//it is doesnot wait for 2sec
//js doesnot wait for any one
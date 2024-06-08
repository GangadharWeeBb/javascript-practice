function square(n) {
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumOfSomething(a,b,callbackfn){
    const val1 = callbackfn(a);
    const val2 = callbackfn(b);
    return val1 + val2;
}
console.log(sumOfSomething(2,2,square))
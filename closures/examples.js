
function x(n){
    for(let i = 1; i <= n; i++) {
        setTimeout(function() {
            console.log(i)
        }, i* 1000)
    }
}
x(5);
//implement using var
function y () {
    for (var i = 1; i <= 5; i++){
        (function(index) {
        setTimeout(function() {
            console.log(index)
        }, i*1000)
    })(i); //iife
}
}
// data hiding and encapsulation
function counter() {
    let count = 0;
    return function increment(){
        count++;
        console.log(count)
    }
}
let counter1 = counter();//counter fun has closure with count vari
counter1();//1
counter1();//2

// to print 1after 1sec 2after 2sec
function counter2(){
    let cnt = 0;
    function increment() {
        cnt++;
        console.log(cnt);
        if(cnt === 5){
            clearInterval(interval);
        }
    }
    increment()
    let interval= setInterval(increment, 1000)//it call increment after every 2secs 
}
let c = counter2()
//setTimeout
function c(n){
    let ct = 0;
    function increment() {
        ct++;
        console.log(ct)
    if(ct < n) {
        setTimeout(increment, 1000)
    }
}
increment()
}
let ctr = c(5)

function createCounter() {
    let ctt =0;
    return {
        increment: function() {
            ctt++;
            console.log(ctt)
        },
        decrement: function() {
            ctt--;
            console.log(ctt)
        },
        reset:function(){
            ctt=0;
            console.log("reset")
        },
        getValue: function() {
            return ctt;
        }
    }
}
let c1 = createCounter();
let c2 = createCounter();
c1.increment()//1
c1.decrement()//0
c1.increment()//1
console.log(c1.getValue())




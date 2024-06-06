//All built in constructor functions use prototype property
let obj = {};
console.log(obj)
console.log(obj.__proto__ === Object.prototype) //true
console.log(obj.toString === obj.__proto__.toString)
console.log(obj.toString === Object.prototype.toString)

let arr = [1,2,3]
console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__.__proto__ === Object.prototype) //true
console.log(arr.__proto__.__proto__.__proto__)//null

function f() {}
console.log(f.__proto__ === Function.prototype)

//native prototypes can be modifies
String.prototype.show = function() {
    console.log(this)
}
"abc!".show();//abc!
//prototypes are global and can easily get confilct
//only in polyfilling modifying of native prototypes are approved

//polyfilling is a term for making a substitute for a method that exists in the JavaScript specification, 
if(!String.prototype.repeat) {
    String.prototype.repeat = function(n){
        return new Array(n+1).join(this);
    }
}
console.log("la".repeat(3))
let a ={
    0:"ho",
    1:"wor",
    length: 2
}
a.join = Array.prototype.join;
console.log(a.join(','))
function x() {
    var a = 10;
    function y(){
        console.log(a)
    }
    a = 100;
    y()
}
var z = x();
console.log(z)
z()
//function remembers a's reference

//here x returns nothing
//z is undefined because x() doesn't return anything.

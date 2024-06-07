function x() {
    var a = 10;
    function y(){
        console.log(a)
    }
    return y; //we are returning fun y
}
var z = x(); //it remembers function y
console.log(z)//returns function y
z()//10

//function remembers a's reference
//when we run z() it tires to find a's reference which is 10

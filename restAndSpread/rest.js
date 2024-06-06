/*
rest parameters ...
A function can be called with any no.of arguments , no matter how its is defined
 */
function sumAll(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg
    }
    return sum;
}
console.log(sumAll(1))
console.log(sumAll(1,2,3,4,5,5))

function showName(firstName, lastName, ...titles) {
    console.log(firstName+' '+lastName)
    console.log(titles[0]);
    console.log(titles[1])
    console.log(titles.length)
}
showName("abc","def","ghi","asdf","asdfad")
//Argument variable
//special array like object named arguments that cotains all arguments by index
function show() {
    console.log(arguments.length);
    console.log(arguments[0])
    console.log(arguments[1])
}
show("zasd","asdf");
show('jon',"bob")
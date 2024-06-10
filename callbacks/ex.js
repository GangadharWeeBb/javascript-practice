//without callback
function greet(name) {
    console.log("hello"+name)
}
function sayGoodBye() {
    console.log("bye")
}
greet("luffy")
sayGoodBye()
/**
 * hello luffy
 * goodbye
 */

//with callbacks
function greet(name, callback) {
    console.log("hi"+name);
    callback();
}
function sayGoodbye(){
    console.log("bye")
}
greet("luffy", sayGoodbye)



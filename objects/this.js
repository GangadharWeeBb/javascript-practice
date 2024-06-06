let user = {
    name : "john",
    age : 30
}
user.sayHi = function() {
    console.log("hello")
}
user.sayHi();

//a function which is property of object is called method
user0 = {
    sayhi:function() {
        console.log("hi")
    }
}
user1 = {
    sayhi() {
        console.log("hleo")
    }
}

//To access the object a method can use the this keyword
let user2 = {
    name:"acasd",
    age:3,
    sayHello() {
        console.log(this.name)
    }
}
user2.sayHello()//acasd
//this keyword evaluates during runtime
let user3 = {name:"ram"};
let admin = {name: "admin"};
function sayHI() {
    console.log(this.name)
}
user3.f = sayHI;
user3.f = sayHI;
//the above calls have different this, this inside the function is object
user3.f();//ram
user3.f()//admin

//arrow functions cant use this keyword in objects

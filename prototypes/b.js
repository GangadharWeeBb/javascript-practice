/*
Prototype methods, objects without __proto__

The modern methods to get/set a prototype are:

Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.
*/
let animal = {
    eats: true
}
let rabbit = Object.create(animal)
console.log(rabbit.eats)
console.log(Object.getPrototypeOf(rabbit) === animal) //true
console.log(Object.setPrototypeOf(rabbit,{}))

let clone = Object.create(
    Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptor(obj)
)
//above call makes truly exact copy of ob, including all properties
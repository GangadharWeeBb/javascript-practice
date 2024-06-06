//[[Prototype]] for objects created via a constructor function.
let animal = {
    eats: true,
}
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype = anima1
let rabbit = new Rabbit("white") //rabbit.__prototype__ == animal
console.log(rabbit.eats)//true
//Rabbit.prototype.constructor == Rabbit //true
//in js, objects have special hidden propery,[[Prototype]]
//that is either null or references another object. The object is called "prototype"

let animal = {
    eat: true
};
let rabbit = {
    jumps:true
};
rabbit.__proto__ = animal;
console.log(rabbit.eat)//true
console.log(rabbit.jumps)

let anima1 = {
    eats: true,
    walk() {
        console.log("animal")
    }
};
let rabbit1 = {
    jumps:true,
    __proto__: anima1
}
let longEar = {
    earLength: 10,
    __proto__: rabbit1
}
longEar.walk();
console.log(longEar.jumps)
//- prototype is only used for reading properties

let user = {
    name: "jon",
    surname:"smith",
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`
}
}
let admin = {
    __proto__:user,
    isAdmin :true
}
console.log(admin.fullName)
//setter
admin.fullName = "asdf";
console.log(admin.fullName);
console.log(user.fullName)
//above this is not affected by prototypes at all

for(let prop in rabbit){
    let isOwn = rabbit1.hasOwnProperty(prop);
    if (isOwn){
        console.log(`${prop}`)
    }else{
        console.log(`${prop}`)
    }
}
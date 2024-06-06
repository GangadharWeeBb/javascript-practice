let mes = "hello";
let phrase = mes;
console.log(mes);
console.log(phrase);

//For objects is not same
//A variable assigned to objects stores not the object itself, but its memory address-
//means - Reference to it
let user = {
    name: "luffy"
}
let admin = user; //copy of reference
console.log(user.name);//gives luffy
admin.name = "garp";
console.log(admin.name);//garp
console.log(user.name);//garp

//when objects are copied it refernce is copied,but not the object itself is not duplicated

let a = {};
let b = a;
console.log(a === b) //true;
let c = {};
let d = {};
console.log(c === d)//false

//cloning
//copying an object variable creates one more reference to same object
//what if we duplicate an object
let user1 = {
    name: 'adam',
    age : 30
}
let clone = {};
for(let key in user1) {
    clone[key] = user1[key];
}
//now clone is fully independent obj with same content
clone.name = "tenz";
console.log(user1.name);//adam
console.log(clone.name);//tenz
//we can simply use object.assign-- (dest, ...sources)

let perm = {canView : true};
let perm2 = {canEdit : true};
//copies all porp of per into user object
Object.assign(user, perm, perm2);
console.log(user.canView)
console.log(user.canEdit)//true
console.log(user.name)
Object.assign(user, {name:"dragon"});
console.log(user.name)
//we can also use this to cloning object
let clone2 = Object.assign({}, user);
console.log(clone2.name);
console.log(clone2.canEdit)

//Nested cloning
//lets say
let user3 = {
    name :'naruto',
    villins:{
        pro:"madara",
        pro2:"obito",
    }
}
//here user3.villins is an object and will copied by reference , so it will share same porperties
//proof for above stmt
let clone4 = Object.assign({}, user3);
console.log(user3.villins === clone4.villins) //tru
user3.villins.pro = "kisame"; //change property of one place
console.log(clone4.villins.pro)//kisame

//To avoid this and make them both separate objects, we use deep cloning
//or structured cloning
let clone5 = structuredClone(user3);
console.log(user3.villins === clone5.villins) //false
user3.villins.pro2 = "itachi";
console.log(clone5.villins.pro2) //obito

/*
The structuredClone method can clone most data types, such as objects, arrays, primitive values.

It also supports circular references, when an object property references the object itself (directly or via a chain or references).
*/
let user4 = {};
user4.me = user4;
let clone6 = structuredClone(user4);
console.log(clone6.me === clone6)//tre

//But it fails for when object has function property


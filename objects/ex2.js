// function makeUser() {
//     return {
//         name : "jon";
//         ref:this;
//     }
// }
// let user = makeUser();
// console.log(user.ref.name) //error
// //because , this inside makeUser is undefined and makeUser is called as function
// //not as an dot syntax

// function makeUser() {
//     return this;
// }
// console.log(makeUser().name) //cant read property of name undefied

function makeUser1() {
    return {
        name: "jan",
        ref() {
            return this;
        }
    }
}
let user1 = makeUser1();
console.log(user1.ref().name)
//Now it works, because user.ref() is a method. And the value of this is set to the object before dot


//cal
let cal = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = 10;
        this.b = 20;
    }
}
cal.read();
console.log(cal.sum())
console.log(cal.mul())

//ladder
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    }
}
//returns the object itself from every call
ladder.up().up().down().showStep().down().down();
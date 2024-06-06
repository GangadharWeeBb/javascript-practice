function User(name) {
    this.name = name;
    this.isAdmin = false;
}
let user = new User("aj");
console.log(user.name)

let user1 = new function() {
    this.name = 'ab';
    this.isAdmin = false;
}

function USER(){
    console.log(new.target);
}
USER()//without new it gives undefined
new USER() //function user{..}

function User1() {
    if(!new.target) {
        return new User1(name)
    }
    this.name = name;
}
let jon = User1("jon");
console.log(jon.name)//jon

//return
function BigUser() {
    this.name = 'jon';
    return {
        name :"godzila"
    } //returs this object
}
console.log(new BigUser().name)
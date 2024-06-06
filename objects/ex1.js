let user = {};
user.name = "luffy";
user.surname = "Monkey D";
user.name = "grap";
delete user.name;
console.log(user.surname)

//2
function isEmpty(obj){
    for (let key in obj) {
        return true;
    }
    return false;
}
let schedule = {};
console.log(isEmpty(schedule))
// let ans = isEmpty("alsd");
// console.log(ans)

//sum of object
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
console.log(salaries.John + salaries.Ann + salaries.Pete)

/*
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
 */

function multiplyNumeric(obj){
    for (let key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] *= 2
        }
    }
}
let menu = {
    width : 200,height:300,title:"mymenu"
};
multiplyNumeric(menu)
console.log(menu)

/*
map function basically map each and every element and transforming acc to given condition
map()method creates a new array with the results of calling a function for every array element
*/


const arr = [1,2,3];
function double(x) {
    return x * 2;
}
function triple(x){
    return x * 3;
}
const doubleArr = arr.map(double);
console.log(doubleArr)

const quadraple = arr.map((x)=>x*2);
console.log(quadraple);

const anime = [
    {firstName:"luffy",lastName:"monkey D ",age:18},
    {firstName:"zoro",lastName:"roronora",age:19},
    {firstName:"sanji",lastName:"vinsmoke",age:20}
]
//get array of fullName :{"monkey D Luffy" ..}
const fullName = anime.map((names)=>names.firstName+" "+names.lastName)
console.log(fullName);
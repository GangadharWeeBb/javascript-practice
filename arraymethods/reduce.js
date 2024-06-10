/*
it is a function which takes all the values f array and gives a single output of it
It reduces the array to give a single output
*/
const arr = [1,2,4,1];

const sumOfArr = arr.reduce(function(accumulator, current) {
    accumulator += current;
    return accumulator;
}, 0) //initialization starts from zero
console.log(sumOfArr);

const max = arr.reduce(function(acc,cur) {
    if(cur > acc) {
        acc = cur;
    } 
    return acc;
},0)
console.log(max)
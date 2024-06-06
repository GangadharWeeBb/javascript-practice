/*
When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list
*/
let arr = [1,2,3];
let arr1 = [4,5,6]
console.log(Math.max(0,...arr,11,22,...arg1))
//we can combine spread syntax
let merged = [0,...arr,90,123,...arr1]
console.log(merged)
//n the examples above we used an array to demonstrate the spread syntax, but any iterable will do.
let str = 'hello';
console.log([...str])
//spread syntax works only with iterables

//copy an array/object
let array = [1,2,3,4];
let arrcopy = [...array]
console.log(JSON.stringify(array) === JSON.stringify(arrcopy))
console.log(array === arrcopy) //false//not same reference
array.push(4);
console.log(array)
console.log(arrcopy);
//we can do same with objects
let obj = {a:1,b:2};
let copyobj = {...obj};
console.log(JSON.stringify(obj) === JSON.stringify(copyobj));
console.log(obj === copyobj);
obj.c = 3;
console.log(JSON.stringify(obj))
console.log(JSON.stringify(copyobj))
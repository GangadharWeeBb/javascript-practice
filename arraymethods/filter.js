/*
filter function is used to filter the value inside an array
arr.filter() method is used to create a new array from a given array consisting 
of only those elements from the given array which statify a condition set by arguments method
*/
const arr = [5,2,1,4,3];

const oddArr = arr.filter((x)=>x%2);
console.log(oddArr);
//filters all odd elements
// You have an array:
// numbers = [1,2,3,4,5];
// Use the reduce() method to calculate the sum of all numbers.

let numbers = [1,2,3,4,5];
let sum = numbers.reduce((acc, val)=>{
    return acc+val;
},0);

console.log(sum);
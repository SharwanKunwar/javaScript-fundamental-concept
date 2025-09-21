// You have an array:
// numbers = [7,2,10,4,6];
// Use reduce() to find the largest number.

let numbers = [7,2,10,4,6];
let largestNumber = numbers.reduce((acc, val)=>{
    return acc > val ? acc : val;
},0);

console.log(largestNumber);
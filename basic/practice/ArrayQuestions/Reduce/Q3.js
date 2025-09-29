// You have an array of numbers:
// numbers = [3,8,1,9,4];
// Use reduce(), find the smallest number in the array.

let numbers = [3,8,1,9,4];
let smallest = numbers.reduce((acc, val)=>{
    return acc < val ? acc : val;
},Infinity);

console.log(smallest);


// you have an array of numbers:
// numbers = [5,10,15]

// Use the map() method to create a new aray of string that says:
// Number X is Y : where x is number and y is index

let numbers = [5,10,15];
let newNumbers = numbers.map((val, index)=>{
    return `Number ${index} is ${val}`;
})

console.log(newNumbers);
// You have an array of numbers:
// numbers = [10, 20, 30, 40]
// Use the map() method to create a new array where each number is added to its index.

let numbers = [10, 20, 30, 40];
let newNumbers = numbers.map((val, ind)=>{
    return val+ind;
})

console.log(newNumbers);
// You have an array of numbers:
// numbers = [1,2,3,4,5]

// Use the map() method to create a new array where each number is multiplied by 3.

let numbers = [1,2,3,4,5];
let newNumbers = numbers.map(function(val){
    return val*3;
})

console.info(newNumbers);
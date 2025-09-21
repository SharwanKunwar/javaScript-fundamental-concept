// You have an array of numbers:
// let numbers = [2, 4, 6, 8];

// Use the map() method to create a new array where each number is replaced by its square.



let numbers = [1,2,3,4,5];
let newNumbers = numbers.map((item, ind)=>{
    return item * item;
})

console.log(newNumbers);
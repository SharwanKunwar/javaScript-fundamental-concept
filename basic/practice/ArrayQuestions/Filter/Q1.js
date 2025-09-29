// You have an array of numbers:

// numbers = [1,2,3,4,5,6,7];
// Use the filter() method to create a new array that contains only the even numbers.

let numbers = [1,2,3,4,5,6,7];
let newNumbers = numbers.filter((val)=>{
    if(val%2 == 0) return val;
})

console.log(newNumbers);


// also you can do this :

let even = numbers.filter(val => val%2==0);
console.log(even);
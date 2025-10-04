//Create a function that takes an array of numbers and returns a new array containing only the even numbers.
// What approach would you use to filter the even numbers from the array?

function evenOnly(arr){
    return arr.filter((val) => val%2 == 0);
}

let numbers = [1,2,3,4,5,6,7,8,9];
let result = evenOnly(numbers);
console.log(result);
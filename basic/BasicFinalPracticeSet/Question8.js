/*
Question 8 (Arrays + Conditionals)

👉 You have an array:
let numbers = [12, 5, 8, 130, 44];
Write a program to find the first number greater than 10 in the array and print it.
*/

let numbers = [12,5,8,130,44];
// let result = numbers.find(val => val>10);
// console.log(result);

//using for loop
for(let i=0; i<numbers.length; i++){
    if(numbers[i] > 10){
        console.log(numbers[i]);
        break;
    }
}
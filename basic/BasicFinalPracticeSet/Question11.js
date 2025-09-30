/*
👉 Write a program that checks if a number stored in a variable num is positive, negative, or zero, and prints the result.
*/

let num = 0;

if(num < 0){
    console.log(`The number ${num} is negative`);
}else if(num === 0){
    console.log(`Zero`);
}else if(num > 0){
    console.log(`The number ${num} is positive`);
}
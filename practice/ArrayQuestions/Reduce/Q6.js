// You have an array:
// numbers = [2,6,8,3,10]
// Use reduce() to count how many numbers are greater then 5.

let numbers = [2,6,8,3,10];
let result = numbers.reduce((acc, num)=>{
    if(num > 5){
        acc++;
    }
    return acc;
},0)
console.log(result);

// You have a array:
// numbers = [2,3,6,7,9,10,12];
// Use reduce() to count how many numbers are divisible by 3.

let numbers = [2,3,6,7,9,10,12];
let result = numbers.reduce((acc, num)=>{
    if(num%3 === 0){
        return acc+1;
    }
    return acc;
},0);

console.log(result);
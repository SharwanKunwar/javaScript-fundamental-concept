// You have an array:
// letters = ["a","b","a","c","b","a"];
// Use reduce() to count how many times each charater appers in the given array.

let letters = ["a","b","a","c","b","a"];
let count = letters.reduce((acc, char)=>{
    acc[char] = (acc[char] || 0)+1;
    return acc;
},{})

console.log(count);
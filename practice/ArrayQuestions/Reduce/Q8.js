// You have an array:
// numbers = [1,2,3,4,5,6]
// Use reduce() to calculate the sum of only the even numbers.

let numbers = [1,2,3,4,5,6];
let evenNumberSum = numbers.reduce((acc, num)=> {
    if(num%2 === 0){
        return acc+num;
    }
    return acc;
},0);
console.log(evenNumberSum);

// short form:
let result = numbers.reduce((acc, num) => num%2 === 0 ? acc+num : acc,0);
console.info(result);
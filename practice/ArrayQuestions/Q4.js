// You have an array of numbers:
// numbers = [3,7,2,9,4]

//Use map() to create a new array where:
// * if the number is even, multiply it by 2
// * if the number is odd, multiply it by 3

let numbers = [3,7,2,9,4];

let newNumbers = numbers.map(function(val){
    if(val%2 == 0) return val*2;
    else return val*3;
})

console.log(newNumbers);

// you have an array of numbers [2,4,6,8,10] use map() method to create a new array wehre each number is dubled.

let number = [2,4,6,8,10];

let newNumbers = number.map(function(val){
    return val*2;
})

console.log(newNumbers);


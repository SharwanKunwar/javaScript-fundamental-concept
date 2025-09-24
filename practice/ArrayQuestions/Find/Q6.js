// Find the index of the first even number.

let arr = [1,3,5,8,10];
let indexOfFirstEven = arr.findIndex(num => num%2 === 0);

console.info(`The first even number index is : ${indexOfFirstEven}`);
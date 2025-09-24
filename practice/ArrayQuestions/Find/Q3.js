// Find the first negative number in this array using .find():
// nums = [3,7,-2,9,5];

let nums = [3,7,-2,9,5];
let firstNegNum = nums.find(val => val<0);
console.log(`The first negative number is : ${firstNegNum}`);


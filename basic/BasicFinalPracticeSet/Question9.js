/*
Question 9 (Objects + Methods)

👉 Create an object calculator with methods:
add(a, b) → returns the sum
subtract(a, b) → returns the difference
multiply(a, b) → returns the product
divide(a, b) → returns the quotient

Example:
calculator.add(5, 3) // 8
calculator.divide(10, 2) // 5
*/

const calculator = {
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        if(b===0) return "you can't divide with zero";
        else return a/b;
    }
}

let r1 = calculator.add(5,3);
let r2 = calculator.subtract(10,5);
let r3 = calculator.multiply(2,2);
let r4 = calculator.divide(10,0);

console.log(r1, r2, r3, r4);
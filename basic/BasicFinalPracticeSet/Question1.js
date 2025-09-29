/*
Question 1 (Loops + Conditionals)

👉 Write a program that prints numbers from 1 to 20.

For multiples of 3 → print "Fizz"
For multiples of 5 → print "Buzz"
For multiples of both 3 and 5 → print "FizzBuzz"
Otherwise → print the number
*/


for(let i=1; i<=20; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");
    }else if(i%5 === 0){
        console.log("Buzz");
    }else if(i%3 === 0){
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
}
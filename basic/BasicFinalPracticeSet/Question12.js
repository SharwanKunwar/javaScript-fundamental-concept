/*
👉 Write a program that prints numbers from 1 to 20, but with conditions:

If the number is even, print "Even: <number>"
If the number is odd, print "Odd: <number>"
*/

for(let i=1; i<=20; i++){
    if(i%2 === 0){
        console.log("even : "+ i);
    }else{
        console.log("odd :"+ i);
    }
}
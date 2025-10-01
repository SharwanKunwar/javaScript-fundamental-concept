/*
You said:
next
ChatGPT said:

Alright 🚀 moving into Loops practice now. Let’s start simple.

Problem 8: Print Numbers from 1 to 10

Description:
Write a program to print numbers from 1 to 10 using:

for loop
while loop
do...while loop

Example Output:
1 2 3 4 5 6 7 8 9 10

Constraints:
Print numbers on the same line or separate lines (both are fine).
*/

// For loop
for(let i=1; i<11; i++){
    console.log(i);
}

// while loop
let track = 1;
while(track <= 10){
    console.log(track);
    track++;
}

//do-while
let i = 1;
do{
    console.log(i);
    i++;
}while(i<=10);
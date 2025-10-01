/*
Problem 12: Grade Calculator

Description:
Given a student’s score (0–100), write a function that returns the grade:

90–100 → "A+"
80–89 → "A"
70–79 → "B"
60–69 → "C"
50–59 → "D"
Below 50 → "F"

Also, if the score is not a valid number (less than 0 or more than 100), return "Invalid score".
*/

function calculateGrade(score){
    if(score < 0 || score > 100){
        return "Invalid score";
    }else if(score >= 90){
        return "A+";
    }else if(score >= 80){
        return "A";
    }else if(score >= 70){
        return "B";
    }else if(score >=60){
        return "C";
    }else if(score >=50){
        return "D";
    }else{
        return "F";
    }
}

let marks = 100;
let result = calculateGrade(marks);
console.log(result);
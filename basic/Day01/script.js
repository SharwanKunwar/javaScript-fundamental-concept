

function grade(marks){
    if(marks >=90 && marks <= 100) return "A+";    
    else if(marks >= 80 && marks < 90) return "A"; 
    else if(marks >= 70 && marks < 80) return "B";
    else if(marks >= 60 && marks < 70) return "C";
    else if(marks >= 33 && marks < 60) return "D";
    else if(marks >= 0 && marks < 33) return "Fail";
    else return "invalid input";
}



let marks = 89;
let result = grade(marks);
console.log(result);



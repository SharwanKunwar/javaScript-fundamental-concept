/*
Write a JavaScript program to calculate the area, circumference, and diameter of circles for a given array of radii using a Higher-Order Function (HOF).

Define a function calculate(RadiusArr, formula) that takes:
An array of radii
A formula (callback function) to apply
Use this function to compute:
The area of each circle.
The circumference of each circle.
The diameter of each circle.
Print the results in arrays.
*/

function calculate(RadiusArr, formula){
    let resultArray = [];
    for(let i=0; i<RadiusArr.length; i++){
        resultArray.push(formula(RadiusArr[i]));
    }
    return resultArray;
}

let radiusOfcircle = [3,7,5,8];

let area = calculate(radiusOfcircle,function(r){
    return Math.PI*r*r;
})

let circumference = calculate(radiusOfcircle,function(r){
    return 2*Math.PI*r;
})

let diameter = calculate(radiusOfcircle, function(r){
    return 2*r;
})

console.log(area);
console.log(circumference);
console.log(diameter);
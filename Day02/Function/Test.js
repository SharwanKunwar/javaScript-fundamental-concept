// function cal(discount){
//     return function(price){
//         return price - price*(discount/100);
//     }
// }

// let f1 = cal(10);
// console.log(f1(1000));



///////////////////////////////////////////////////////////////////////////////////////////   




// function count(){
//     let track = 0;
//     return function(){
//         track++;
//         return track;
//     }
// }

// let cl = count();

// for(let i=0; i<10; i++){
//     console.log(cl());
// }



////////////////////////////////////////////////



// function fun(arr, operation){
//     return arr.map(operation);
// }



// let age = [1,2,3,4,5];


// let double = fun(age, function(val){
//     return val*2;
// })

// let square = fun(age, function(val){
//     return val*val;
// })

// console.log(double);
// console.log(square);

//////////////////////////////////////////////////////


// function greatestElement(arr){
    
//     let max = arr[0];
//     for(let element of arr){
//         if(element > max){
//             max = element;
//         }
//     }

//     return max;
// }

// let age = [122,8,39,4,5];
// console.log(greatestElement(age));


// //This also work
// console.log("also : "+Math.max(...age));


////////////////////////////////////////////////////////////////

//  Write a JavaScript function reverseString(str) that takes a string as input and returns the string reversed.

// function reverseString(str){
//     let reversedString = "";

//     for(let i = str.length-1; i>=0; i--){
//         reversedString += str[i];
//     }

//     return reversedString;
// }

// let myName = "belive";
// console.log(reverseString(myName));



/////////////////////////////////////////////////

let str = "mahakal";
let str_arr = [];

for(let i= 0; i<str.length; i++){
    console.log(str[i]);
    str_arr[str.length-(i+1)] = str[i];
}

console.log(str_arr);
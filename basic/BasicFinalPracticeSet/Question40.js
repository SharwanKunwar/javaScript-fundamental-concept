// Write a function that takes a string and returns it reversed.

function reverseString1(str){
    let reversedString = str.split("").reverse().join("");
    return reversedString;
}

function reverseString2(str){
    let holdReversedStr = "";
    for(let i=str.length-1; i>=0; i--){
        holdReversedStr = holdReversedStr+str[i];
    }
    return holdReversedStr;
}

let word = "love";
let result = reverseString1(word);
let result2 = reverseString2(word);
console.log(result);
console.log(result2);
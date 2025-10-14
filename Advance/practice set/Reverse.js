// Write a function to reverse a string without using built-in methods.

function reverse(str){
    let reversedString = "";
    for(let i=str.length-1; i>=0; i--){
        reversedString+=str[i];
    }
    return reversedString;
}

let word = "Love";
let result = reverse(word);
console.log(result);
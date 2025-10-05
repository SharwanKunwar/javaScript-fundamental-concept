/*
Question:

Write a function isPalindrome(str) that checks whether a given string is a palindrome.
A palindrome is a word or phrase that reads the same backward as forward.
The function should return true if it is a palindrome, false otherwise.
Ignore case and spaces.

isPalindrome("racecar") // true
isPalindrome("Level")   // true
isPalindrome("hello")   // false
isPalindrome("A man a plan a canal Panama") // true
*/
function isPalindrome(str){
    let orginalString = str.split(' ').join('').toLowerCase();
    let reversedString = "";

    for(let i=orginalString.length-1; i>=0; i--){
        reversedString+=orginalString[i];
    }

    if(orginalString === reversedString){
        return `${orginalString} is palindrome string`;
    }else {
        return `${orginalString} is not palindrome string`;
    }
    
}

let word = "A man a plan a canal panama";
let result = isPalindrome(word);
console.log(result);
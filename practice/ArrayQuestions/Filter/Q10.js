// You have an array:
// words = ["apple", "ant", "banana", "arm", "avocado"];
// Use filter() to create a new array that contains words that start with "a" and have more then 3 letters.

let words = ["apple", "ant", "banana", "arm", "avocado"];
let newWords = words.filter(item => item.startsWith("a") && item.length > 3);

console.log(newWords);
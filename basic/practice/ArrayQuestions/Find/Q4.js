// Find the first word that starts with "a":
// words = ["dog", "cat", "apple", "banana"];

let words = ["dog", "cat", "apple", "banana"];
let word = words.find(item => item.startsWith("a"));
console.log(`The first word start with "a" is : ${word}`);
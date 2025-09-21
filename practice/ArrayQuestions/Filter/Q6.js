// You have an array:
// words = ["ball", "apple", "bat", "cat", "banana"];
// Use filter() to create a new array with only words that start with the letter "b".

let words = ["ball", "apple", "bat", "cat", "banana"];
let newWords = words.filter(item => item.startsWith("b"));
console.log(newWords);


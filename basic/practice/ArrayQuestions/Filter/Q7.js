// You have an array:
// words = ["cat", "apple", "bat", "kiwi", "dog"];
// Use filter() to create a new array that contains only words with 3 or fewer letters.

let words = ["cat", "apple", "bat", "kiwi", "dog"];
let newWords = words.filter(item => item.length <= 3);
console.log(newWords);

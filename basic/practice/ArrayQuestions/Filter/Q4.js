// You have an array of words:
// words = ["cat", "dog", "apple", "bat", "kiwi"]
// Use the filter() method to create a new array that contains only the words that have the letter "a".

let words = ["cat", "dog", "apple", "bat", "kiwi"];
let newWords = words.filter(item => item.includes("a"));
console.log(newWords);

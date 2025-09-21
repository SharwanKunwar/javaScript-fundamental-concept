// You have an array of words:
// words = ["apple", "kiwi", "banana", "pear"]
// Use the filter() method to create a new array that constions only the words with more then 4 letters

let worlds = ["apple", "kiwi", "banana", "pear"];
let newWords = worlds.filter(item => item.length > 4);

console.info(newWords);
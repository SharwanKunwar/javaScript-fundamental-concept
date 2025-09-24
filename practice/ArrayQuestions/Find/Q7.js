// Find the index of the first word with lenght greater then 4.
// words = ["hi", "sun", "world", "sky"];

let words = ["hi", "sun", "world", "sky"];
let WordIndex = words.findIndex(word => word.length > 4);
console.log(WordIndex);
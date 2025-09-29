// You have an array:
// words = ["cat", "apple", "bat", "banana"]
// Use reduce() to create a single string of words that have more then 3 letters, separated by a space.

let words = ["cat", "apple", "bat", "banana"];
let newWords = words.reduce((acc, word)=>{
    if(word.length > 3){
        return acc+ (acc ? " " : "") + word;
    }

    return acc;
},"")

console.log(newWords)
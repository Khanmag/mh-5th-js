function checkLetter(word, letter) {
    if (word.includes(letter)) {
        if (word.indexOf(letter) !== word.lastIndexOf(letter)) {
            return true; 
        }
        return false; 
    }
    return "В слове нет этой буквы";
}

console.log(checkLetter("hello", "l")); 
console.log(checkLetter("world", "d")); 
console.log(checkLetter("javascript", "z")); 

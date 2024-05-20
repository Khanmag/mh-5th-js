function search(word, i) {
  if (word.includes(i)) {
    if (word.indexOf(i) !== word.lastIndexOf(i)) {
      return true;
    }
    return false;
  }
  return "В слове нет этой буквы";
}

console.log(search("search", "l"));
console.log(search("www", "w"));
console.log(search("zip", "z"));

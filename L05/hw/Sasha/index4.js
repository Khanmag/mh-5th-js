function string(str) {
  if (str.length > 20) {
    return str.slice(0, 20) + "...";
  } else {
    return str;
  }
}

console.log(string("123456789123456789123456789"));
console.log(string("12345678912345678912"));

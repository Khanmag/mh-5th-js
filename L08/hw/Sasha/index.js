//----------------Задача №1----------------
const column = [
  0,
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
];

const doNiceRomeNumber = (number) => {
  const length = number.length;

  return column[length];
};

console.log(doNiceRomeNumber("IIIIIIII"));
console.log(doNiceRomeNumber("IIIIIIIII"));
console.log(doNiceRomeNumber("IIIIIIIIIII"));
console.log(doNiceRomeNumber(""));

// ----------------Задача №2----------------
const showSeconds = () => {
  const getTime = new Date();
  const hours = getTime.getHours();
  const minutes = getTime.getMinutes();
  const seconds = getTime.getSeconds();
  return [hours, minutes, seconds];
};

const secValue = setInterval(() => {
  const secArray = showSeconds();
  console.log(secArray);
}, 1000);

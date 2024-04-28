console.log("hw3a");
let i = 0;
let n1 = 1;
let n2 = 2;

while (i < 10) {
  i++;
  console.log(`${n1}`);
  console.log(`${n2}`);
  n1 = n1 + n2;
  n2 = n2 + n1;
}

console.log("hw3b");
let number = 100;
let count = 0;
for (number = 100; number <= 300; number++) {
  if (number % 3 == 0) {
    count++;
    if (count % 5 == 0) {
      console.log(number);
    }
  }
}

console.log("hw3c1");
function getZod(zodSign) {
  switch (zodSign) {
    case "Aries":
      return "Могут произойти изменения в финансовой сфере";
    case "Taurus":
      return "Будьте гибче и не стойте упорно на своем";
    case "Gemini":
      return "Самостоятельная работа будет более продуктивной";
    case "Cancer":
      return "Ожидается всплеск творческого вдохновения";
    case "Leo":
      return "Сегодня хорошо пройдет романтичнское свидание";
    case `Virgo`:
      return `Будет много общения`;
    case `Libra`:
      return `Изменения в финансовой сфере`;
    case `Scorpio`:
      return `День подходит для романтичнских свиданий и знакомств`;
    case `Sagittarius`:
      return `Время, проведенное с семьей, вас порадует`;
    case `Capricorn`:
      return `Коллективная деятельность предпочтительнее`;
    case `Aquarius`:
      return `Дома вы заимейте позицию лидера`;
    case `Pisces`:
      return `Точка зрения по важному вопросу может измениться`;
    default:
      return `Некорректный знак зодиака`;
  }
}
console.log(getZod("Pisces"));

console.log("hw3c2");
function sumBDay() {
  day = 7;
  month = 12;
  sum = day + month;
  console.log(sum);
}
sumBDay();

console.log("hw3c3");
function addSugar() {
  let answer;
  let count = 0;

  do {
    answer = prompt("Добавить сахар в кофе?");
    if (answer === "Да") {
      count++;
      alert("Ложек сахара в кофе - " + count);
    } else {
      alert("Приятного кофепития!");
    }
  } while (answer === "Да");
}
addSugar();

// let wantToContinue = confirm("Поставить будильник?")
// while(wantToContinue) {
//   alert("ПОРА ВСТАВАТЬ!")
//   wantToContinue = confirm("ОТОЖИТЬ БУДИЛЬНИК?")
// }

// const userNumber = prompt("До скольки досчитать?")
// const userNumber = 8;

// let i = 0; // i | j
// let i = userNumber; // i | j
// // while(i <= userNumber) {
// while (i > 0) {
//   // console.log(i++); // сначала используем i, а потом увеличиваем на 1
//   // console.log(++i); // сначала увеличиваем i на 1, а потом используем
//   // console.log(i--);
//   // console.log(--i);
//   // console.log(i);
//   //
//   // i = i + 1
//   //
//   // i += 1
//   //
//   // i++
//   // ++i
// }

// let wantToContinue
// do {
//   alert("DDDZZZZZZZZZ")
//   wantToContinue = confirm("ОТОЖИТЬ БУДИЛЬНИК?")
// } while(wantToContinue)

// for (let i = 0; i < 100; i++) {
// if (i === 50 || i === 59 || i === 40) {
//   continue;
// }
// 10 % 3 => 1, 14 % 5 => 4
// if (i % 3 === 0 || i % 5 === 0) {
//   continue // на этом закончи и приступай к следующему
//   console.log(i)
// }
// if (i % 3 === 0 && i % 5 === 0) continue
// if (i % 3 === 0 && i % 5 === 0) console.log(i);
// console.log(i);
// }
// for (let i = 0; ; i++) {
//   // if (i < 1000) console.log(i);
//   // else break
//   if (i > 1000) break
//   console.log(i);
// }
// Пользователя спрашивают положить ли ему сахар, если ответ "да", то
// спрашивам "положить ещё?" им так до тех пор пока он не откажется

// let wantToContinue = confirm("Положить сахар?");
// do {
//   wantToContinue = confirm("положить ещё?");
// } while (wantToContinue);

// const userNumber = prompt("NUMBER")
// let str = ""
// while( str.length !== +userNumber) {
//   str = str + "a"
//   console.log(str);
// }
// console.log("Sasha".length);

// const number = 10
// // let string // let string = undefined
// let string = ""
// for (i = 0; i <= number; i++) {
//   // i = i + "a" // ===>  "0a" ===> "0a" < "10"
//   string += "a"
//   console.log(string);
// }
// getName("Tom", 50)
function getName(name, age) {
  if (!name || !age) console.log("Данные некорректны");
  else console.log(name, age);
}

// const isUserAgree = confirm("Вывести имя в консоль?")
// if (isUserAgree) getName()

// const userName = prompt("Введите своё имя")
// const userAge = prompt("Введите возраст")
// getName(userName, userAge)

// powNumber(15)
const powNumber = function (n) {
  console.log(n ** 2);
};

// powNumber(4)
// powNumber(41)
// powNumber(412)

// console.log(randomVariable);
// const randomVariable = "random"
// let randomVariable = "random"
// var randomVariable = "random"

// ARROW FUNC
// const betterPowNumber = (n, k) => {
//   console.log(n ** k);
//   // return n ** k
// }
// console.log(betterPowNumber(4, 3));
// betterPowNumber(4, 3)

const getMoreThenNumber = (n) => {
  // console.log(n + 1);
  // return
  const userName = prompt("NAME!!!");
  return userName;
};
// getMoreThenNumber(4)
const funcResult = getMoreThenNumber(4); // undefined
console.log(funcResult);

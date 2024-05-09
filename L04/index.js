let num = 33;
// console.log("num", num); // 33
num = 13;
// console.log("num", num); // 13

// Объект - набор пар ключ - значение
const obj = {
  num: 124123,
  str: "qwerty",
  insideObj: {
    num2: 14123123,
  },
};
// const obj = {
//   "num": 124123,
//   "str": "qwerty"
// }

// console.log( obj.num );
// console.log( obj["num"] );

const userData = {
  name: "Andrey",
  login: "ANDY123",
  jobs: {
    doctor: "5 years",
  },
  // метод (объекта) - функция внутри объекта
  //
  changeName(newName) {
    userData.name = newName
  },
  // "changeName": function() {

  // }
  //
  // changeName: function(newName) {
  //   userData.name = newName
  // }
  //
  // changeName: (newName) => {
  //   userData.name = newName;
  // },
};

// const user2 = {}
// // вместо key написать что угодно, мы создали переменную, в которую попадёт каждый ключ объекта userData
// for (key in userData) {
//   // console.log(key);
//   // ?? почему не user.key ??
//   //  userData.key ищет свойство "key" в объекте userData,
//   // userData[key] ищет свойсво с именем равным значению переменной key
//   user2[key] = userData[key]
// }

// const user1 = userData;
// const user2 = {...userData, jobs: {...userData.jobs}}
// const user2 = structuredClone(userData)

// userData.login = "Madina"
// userData.jobs.doctor = "8 years"

// console.log("userData", userData);
userData.name;
userData.changeName("Artyom");
// console.log("user1", user1);
// console.log("user2", user2);

const game = {
  nick: "KILLER",
  points: 0,
  startGame() {
    const userValue = confirm("ОРЕЛ - ДА, РЕШКА - НЕТ");
    const yesOrNo = Math.random() > 0.5; // случайное да или нет
    if (userValue == yesOrNo) {
      // player.points = player.points + 1
      // player.points += 1
      // player.points++
      alert(`Вы угадали, ваши очки: ${++this.points}`);
    } else {
      alert(`Вы ошиблись, ваши очки: ${--this.points}`);
    }
    // player.startGame() .. перезапускаем после каждой игры
    let wantUserStart = confirm("сыграть");
    // if (wantUserStart) {
    //   player.startGame()
    // } else {

    // }
    // this - объект в котором мы находимся
    if (wantUserStart) this.startGame();
  },
};
game.startGame(); // запускаем в первый раз

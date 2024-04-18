let num = 3123123;

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
  // changeName(newName) {
  //   userData.name = newName
  // }
  //
  // changeName: function(newName) {
  //   userData.name = newName
  // }
  //
  changeName: (newName) => {
    userData.name = newName;
  },
};

const user1 = userData;
user1.login = "USER1";

console.log("userData", userData);
// userData.changeName("Artyom");
console.log("user1", user1);

// console.log(5 ** 3); // 125 - 5 в 3 степени
// console.log(4 ** 5); // 1024 - 4 в 5 степени
// const userNumber = prompt("Введите число")
// !isNaN(NaN)  - false
// !isNaN(3213)  - true
// if (!isNaN(userNumber)) { // ! - не, isNaN - является ли NaN
//   alert(userNumber ** 2)
// } else {
//   alert("Вы ввели какую-то фигню, а не число")
// }
// console.log(typeof NaN);
// console.log(NaN >= 0);
// console.log(NaN <= 0);
// const InfinityNumber = 100 / 0
// console.log(InfinityNumber > NaN );
// const isNaNResult1 = isNaN(242)
// const isNaNResult2 = isNaN(NaN)
// console.log(isNaNResult1);
// console.log(isNaNResult2);

// ------------------ LOGIN LOGIC -------------------------

const userLogin = prompt("Введите логин");
// console.log(userLogin);
const pass = 1234;
if (userLogin === "admin") {
  // если пользователь admin, тогда надо потребовать пароль и если он верный вывести алерт ниже, если нет, сказать об этом
  // const adminPass = prompt("Введите пароль");
  // if (adminPass == pass) {
  //   alert("Доброго времени суток администратор");
  // } else {
  //   alert("Пороль неверный");
  // }
  //
  // if (prompt("Введите пароль") == pass)
  //   alert("Доброго времени суток администратор");
  // else alert("Пороль неверный");
  //
  alert(
    prompt("Введите пароль") == pass
      ? "Доброго времени суток администратор"
      : "Пороль неверный"
  );

} else if (userLogin === "user") {
  alert("Привет пользователь!");
} else if (userLogin === "hiddenUser") {
  alert("Мы никому о вас не расскажем");
}
// если userLogin это "", тогда userLogin === 0 это false, а userLogin == 0 это true
// else if (userLogin == 0) {
else if (!userLogin) {
  // если нет userLogin // !userLogin >> userLogin == false // "" , 0 , null, undefined - false
  alert("Решили не представляться, ну ладно");
}
//
else {
  // alert("Привет незнакомец");
  alert(`Привет ${userLogin}`);
}


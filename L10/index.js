// const callback1 = (n) => {
//   return n ** 2
// }
const callback1 = (n) => n ** 2;

// alert(callback1(35)) // передали в алерт результат выполнения функции => alert(1225)
// alert(callback1)

const customAlert = (n, func) => {
  const result = func(n);
  alert(result);
};
// customAlert(35, callback1) // callback1(35) => alert(1225)
// customAlert(25, n => n ** 3)

// setInterval(() => {
//   console.log("Tick Tack");
// }, 1000);


// Задача на вывод секунд в консоль
let i = 1;
const tikTakFunc = () => {
  console.log(i++);
};
setInterval(tikTakFunc, 1000);

// Вывести по буквам слово, которое ввёл пользователь
// const userWord = prompt("Ведите любое слово", "слово")

const str = "";
// const num = 3 + 5 // num = 8
const num1 = 3 + "09"; // num = "309"
const num2 = "09" + 3; // num = " 093"
const num3 = "09" + "fdsf"; // num = "09fdsf"
// Любой математический оператор кроме + заставляет привести выражение к числу
const num4 = "99" - 3; // => 99 - 3 = 96
const num5 = "99" - "3"; // => 99 - 3 = 96
const num6 = "99" + "3"; // => "99" + "3" = "993"
const num7 = 99 + 3; // => 99 + 3 = 102
const bigIn = 3213213213213n;

const obj = {
  name: "John",
  midName: "Clint",
  ability: "speedrun",
  key: "my key",
};
// console.log(obj.midName);
// Вы знаете что есть свойство со значением "Clint",
// надо вывести название этого свойства
// for (let key in obj) {
//   if (obj[key] === "Clint") console.log(key);
//   // console.log(obj.key); // obj.key / obj.key / obj.key / obj.key
//   // console.log(obj[key]); // obj.name / obj.midName / obj.ability / obj.key
// }

// Добавить surname
// obj.surname = "Smith"
// console.log(obj);

// Массив это объект, ключами которого являются индексы
// console.log("sdfgasdfsad"[4]);
const array = ["Anna", "Bill", "Clint", "Den", "Elena"];
// console.log("qwerty"[2]); // e
// console.log(array[2]); // "Clint"
// for (let item of array) {
//   // if (item === "Clint") console.log(item);
//   // console.log(item);
//   if (item === "Den") console.log(item, array.indexOf(item));
// }
// add
array.push("Fillip");
array.unshift("Zero");
// delete
array.pop();
array.shift();

// откуда удалить / сколько удалить / что вместо этого добавить ...
// const spliceMethod = array.splice(2, 3, "Madina", "Sasha", "Shamil", "Olesya")
const spliceMethod = array.splice(2, 3, "Madina", "Sasha", "Shamil", "Olesya");
// console.log("spliceMethod", spliceMethod);

// const sliceMethod = array.slice(2, 6)
// console.log("sliceMethod", sliceMethod);

// const hideString = prompt("Write anything!")
// alert(hideString.indexOf("r"))

// console.log(array);

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [9, ...arr1, 10]; // [9, 1, 2, 3, 4, 10]
const resultArr = arr1.concat(arr2, arr3, 11);
const resultArr2 = [...arr2, ...arr1, ...arr3];

// console.log(resultArr);
// console.log(resultArr2);

// Методы массива принимаю в себя функцию
// const forEachMethod = array.forEach( (item, index, arr) => {
//   console.log("item", item, "index", index, "arr", arr);
// })
// console.log(forEachMethod);

// Возвращает новый массив, из элементов, которые были возвращены функцией
const mapMethod = array.map((item, index, arr) => {
  // console.log("item", item, "index", index, "arr", arr);
  return index + ") " + item;
  // return undefined
});
// console.log(mapMethod);

// Фильтрует массив в зависимости от значения, возвращаемого функцией
// (true - остаётся в массиве, false - отфильтровывается)
// const filterMethod = array.filter((item, index, arr) => {
//   if (item === "Sasha" || item === "Madina") return true
//   return false
// });
// const filterMethod = array.filter((item, index, arr) => {
//   // if (["Sasha", "Madina"].includes(item)) return true
//   // return false
//   return ["Sasha", "Madina"].includes(item)
// });
const filterMethod = array.filter( item => ["Olesya", "Sasha", "Madina"].includes(item));
// console.log(filterMethod);

// Возвращает первый элемент, с которым функция вернула true или если элемент не найден - undefined
const findMethod = array.find((item, index, arr) => {
  // console.log(item);
  return item === "Aleksandra"
}) 
console.log(findMethod);


// console.log(array);

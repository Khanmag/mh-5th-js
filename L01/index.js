var name1 = "Nonna";

let name2 = "Madina";
// const name3 = "Sasha"
// name2 = "new Madina"
// name3 = "new Sasha"
// const name4 = "new Sasha"

// --------------- NUMBER --------------------------------
const num1 = 12312312;
// console.log(num1);
// --------------- BIGINT --------------------------------
const bigint = 123123121312312312312n;
// console.log(bigint);
// --------------- STRING --------------------------------
// const st1 = "Nonna"
const str1 = "I'm a programmer";
// const st2 = 'Madina'
// const st2 = 'he say "Hi!"';
const str2 = 'he say "Hi!"';
const str3 = `Sasha and 
${name2} and 
${name1}`;
// console.log(str1);
// console.log(str2);
// console.log(str3);
// создайте переменную myName и выведите в консоль приветствие, "привет - <ваше имя>"
// --------------- BOOLEAN ---------------------------------
const bool1 = true;
// const bool1 = "true";
const bool2 = false;
// console.log(bool1, bool2);
// --------------- NULL ------------------------------------
const nullData = null; // ???
const userName = null; //
// --------------- UNDEFINED -------------------------------
const undef = undefined; // ?? ?? ??
let undef2;
// console.log(undef, undef2, undef3);
// --------------- SYMBOL ----------------------------------
const uniq = Symbol("id");
// console.log(uniq);
// --------------- OBJECT ----------------------------------
// объект это набор пар {ключ: значение}
// {} литерал объекта
const obj = {
  name: "Шамиль",
  city: "Москва",
  userName: null,
  true: "fdsfas"
};
obj.job = "developer"
obj.name1 = "Nonna"
delete obj.name
// console.log(obj.name);
// console.log(obj.city);
// console.log(obj.userName);
obj.userName = "USER2134";
// console.log(obj);

// console.log(47 + 89);
// console.log(47 + "89");
// console.log("new" + " Sasha");
// console.log(47 - 89);
// console.log(47 - "89");
// console.log(47 - true); // true = 1, false = 0
// console.log(47 - Symbol("ewgwrfahwieo")); 
// console.log(47 - {value: 321});
// console.log(47 - null); // null --> 0
// console.log(47 - undefined); // undefined --> NaN
// console.log("new" - " Sasha"); // NaN Not A Number
// console.log("new" * " Sasha"); // NaN Not A Number
// console.log("new" / " Sasha"); // NaN Not A Number
// console.log(typeof null);
// console.log(typeof +"312412431");
// console.log(typeof !"312412431");
// console.log(!!"312412431");
// console.log("", 0, null, undefined); // !! -> false
// console.log(!!""); // !! -> false
// console.log("b5" > "a7"); // "15" > "a"
// console.log("aa" > "ab"); // 
// console.log("59" > "8"); // 
// console.log(15 > true); // 
// console.log(15 > NaN); // 
// console.log(15 < NaN); // 
// console.log(15 == NaN); // 
// console.log(15 == "15"); // нестрогое сравнение, сначала приводит к одному типу, потом сразнивает значение
// console.log(15 === "15"); // строгое сравнение, сначала сравнивает типы, потом сразнивает значение

alert("HELOOO!!!")
const data1 = prompt("Введите имя", "например Андрей")
const data2 = confirm("Хотите продолжить")

console.log(data1);
console.log(data2);




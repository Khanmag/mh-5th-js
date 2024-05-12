const myName = "Olesya";

const simpleFunc = () => {
  console.log(`${myName}'s FUNC!`);
};
// simpleFunc()

const countCreator = (num) => {
  let count = 0;
  return () => {
    console.log(`counter${num} ${count++}`);
    // return
  };
};
// const counter1 = countCreator
// console.log("counter1", counter1);
const counter2 = countCreator(2);
// counter2 - функция, которую вернул countCreator
//() => {
//  console.log(count++);
// }

// console.log("counter2 - 1", counter2); // () => {...}

// console.log("counter2 - 2", counter2());
// 0 - от консоли в counter2
// counter2 - 2  undefined - от консоли выше

// counter2(); // 0
// undefined
// counter2(); // 1
// counter2(); // 2
// counter2(); // 3

const counter3 = countCreator(3);
// counter3();
//
const callsCounter = (name) => {
  let count = 0;
  return () => console.log(`${name}'s calls - ${++count}`);
};

const annasCalls = callsCounter("Anna");
const billsCalls = callsCounter("Bill");
// annasCalls() // 1
// billsCalls() // 1
// billsCalls() // 2
// billsCalls() // 3

// console.log(window);
// console.log(this);
// console.log(global);
// console.log(globalThis);


// const powFunc = (a, n) => {
//   return a ** n
// }
const powFunc = (a, n) => {
  console.log(`a = ${a}, n = ${n}`);
  return (n === 1) ? a : a * powFunc(a, n - 1)
}

const timer = (secs) => {
  console.log(secs);
  return (secs === 0) ? 0 : timer(secs - 1)
} 

// let i = 0
// const numCounter = (count) => {
//   console.log(i++);
//   return (count === 30) ? 30 : timer(count + 1)
// }

// const result = powFunc(3, 5)
// 3, 5
// 3 * (3, 4)
// 3 * 3 * (3, 3)
// 3 * 3 * 3 *(3, 2)
// 3 * 3 * 3 * 3 * 3
// console.log(result);

timer(20)


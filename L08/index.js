const myName = "Olesya";

const simpleFunc = () => {
  console.log(`${myName}'s FUNC!`);
};
// simpleFunc()

const countCreator = (num) => {
  let count = 0;
  return () => {
    console.log(`counter${num}`, count++);
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

counter2(); // 0
// undefined
counter2(); // 1
counter2(); // 2
counter2(); // 3

const counter3 = countCreator(3);
counter3();
//

// annasCalls() // 1
// billsCalls() // 1
// billsCalls() // 2
// billsCalls() // 3

//-----------Пропушенные звонки-----------
const countCalls = (call) => {
  let count = 0;
  return (num = 1) => {
    count = count + (isNaN(num) ? 1 : num);
    console.log(`Пропущенный от ${call}`, count);
  };
};

const Anna = countCalls("ANNA");
Anna(3);
Anna();
const Bill = countCalls("BILL");
Bill(2);
Bill("hi");
Bill();

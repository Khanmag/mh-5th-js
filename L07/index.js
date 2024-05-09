// const mapExample = [
//   ["name", "John"],
//   ["age", 33],
//   ["addres", { city: "Moscow", street: "Arbat" }],
// ];

// const parags = document.querySelectorAll("p");
// const p1 = parags[0];
// p1.textContent = "About me";
// // console.log(parags, p1);
// const paragsMap = new Map([
//   [p1, "About me"],
//   [Symbol("id"), "pass"],
// ]);
// // console.log(paragsMap);

//
const userData = {
  name: "Andrey",
  login: "ANDY123",
  jobs: {
    doctor: "5 years",
    // showThis: () => {
    //   console.log(this);
    // },
  },
  changeName(newName) {
    userData.name = newName;
  },
  // showThis() {
  //   console.log(this);
  // },
};

localStorage.setItem("userData", JSON.stringify(userData))
const myLocalData = JSON.parse(localStorage.getItem("userData"))
console.log(myLocalData);

// const resultK = Object.keys(userData);
// const resultV = Object.values(userData);
// const rend = Math.random()
// console.log(resultK);
// console.log(resultV);

// userData.showThis();
// userData.jobs.showThis();
// console.log(this);

// -------------- DATE

// const hours = document.getElementById("hours");
// const mins = document.getElementById("mins");
// const secs = document.getElementById("secs");
// const nowDate = new Date();
// const nowDate = new Date(365 * 24 * 3600 * 1000);
// const nowDate = new Date("1991-02-03");
// nowDate.setFullYear(2005)
// создаём новый объект даты, в котором есть унаследованные свойства и методы
// console.log("nowDate", nowDate);

// console.log(nowDate.getHours());
// console.log(nowDate.getMinutes());
// console.log(nowDate.getSeconds());

const showSeconds = () => {
  const nowDate = new Date();
  // //
  // const hourValue = nowDate.getHours();
  // hours.textContent = (hourValue < 10 ? "0" : "") + hourValue;
  // //
  // const minValue = nowDate.getMinutes() + "";
  // // if (minValue.length < 2) {
  // //   mins.textContent = "0" + minValue;
  // // } else {
  // //   mins.textContent = nowDate.getMinutes();
  // // }
  // //
  // mins.textContent = (minValue.length < 2 ? "0" : "") + minValue;
  // // после ? выпольняется при true, после : при false
  // //
  // const secValue = nowDate.getSeconds();
  // secs.textContent = (secValue < 10 ? "0" : "") + secValue;
  hours.textContent = defaultNumView(nowDate.getHours())
  mins.textContent = defaultNumView(nowDate.getMinutes())
  secs.textContent = defaultNumView(nowDate.getSeconds())
};
const defaultNumView = (value) => {
  return (value < 10 ? "0" : "") + value
}
//
console.log(nowDate.getDay());
const timerId = setInterval(() => {
  showSeconds();
}, 1000);

// console.log(nowDate.toLocaleDateString({}));

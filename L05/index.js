
const testNumber = 329.524
const objNumber = {
  value: 329,
  showValue() {
    return this.value
  }
}

// console.log(testNumber);
// console.log(objNumber.showValue());

// console.log("RANDOM", Math.random());
// console.log(Math.floor(testNumber)); // 329
// console.log(Math.floor(329.999)); // 329
// console.log(Math.floor(-329.999)); // 330
// console.log(Math.ceil(testNumber)); // -330
// console.log(Math.ceil(329.999)); // 330
// console.log(Math.ceil(-329.999)); // -329
// console.log(Math.round(testNumber)); // 330
// console.log(Math.round(5.239)); // 5
// console.log(Math.round(-7.99)); // -8
// console.log(Math.trunc(testNumber)); // 329
// console.log(Math.trunc(5.239)); // 5
// console.log(Math.trunc(-7.99)); // -7


// console.log(testNumber.toFixed(2));
// console.log(testNumber.toFixed(1));
// console.log(testNumber.toFixed(4));
// console.log(30.49.toFixed(4));
// console.log(30..toFixed(4));

// console.log(329, typeof 329); // 329 number
// console.log(329..toString(), typeof 329..toString())

const nanVariable = +"rfasdfsd" // NaN
// console.log(typeof NaN);
// console.log(isNaN(nanVariable));
// console.log(isNaN(325345));
// console.log(isNaN("34213432")); // false
// console.log(Number.isNaN("34213432")); // false потому что строка
// console.log(isNaN("аыфваывпава")); // true
// console.log(Number.isNaN("аыфваывпава")); // false

// console.log(isFinite(100)); // true
// console.log(isFinite(100 / 0)); // false
// console.log(100 / 0);
// console.log(isFinite("100/0")); // false
// console.log(Number.isFinite("100/0")); // false

const data = {
  title: "выручка",
  value: 1420,
  postfix: "руб",
  showValue() {
    console.log(this.value + this.postfix);
  }
}
// data.showValue()

const smartParse = (num) => {
  // console.log(num, num[0]);
  // console.log(num.length);
  let acc = ""
  for (let i = 0; i < num.length; i++) {
    // if (isNaN(num[i])) continue
    // Прерываемся, если символ не число и не точка
    // const isDotAndHaveNoDots = (num[i]) === "." && acc.indexOf(".") === -1
    const isDotAndHaveNoDots = (num[i]) === "." && !acc.includes(".")
    if (isDotAndHaveNoDots) {
      acc += num[i]
      continue
    }
    if (isNaN(num[i])) break
    else acc += num[i]
    // console.log(num[i], isNaN(num[i]));
  }
  // console.log(acc, num[num.length - 1] === "." );
  if (num[num.length - 1] === ".") {
    console.log(acc.slice(0, acc.length - 1)); 
  } else {
    console.log(acc);
  }
}

// console.log(parseInt("100px+50px"));
// console.log(parseInt("100.5px"));
// console.log(parseFloat("100px50px"));
// console.log(parseFloat("100.5px"));
// smartParse("string")
// smartParse("100px")
// smartParse("100.6px50px")
// smartParse("100..6px50px.")
// smartParse("101241234120..6px50px.")
// console.log("16016241234120..6px50px.".lastIndexOf("6"))
// console.log("16016241234120..6px50px.".lastIndexOf("x"))

// console.log("100..6px50px.".indexOf("Y"));
// console.log("100..6px50px.".includes("Y"));
// console.log("100..6px50px.".includes("6"));


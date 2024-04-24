const myDiv = document.getElementById("root");
console.log(myDiv);
console.dir(myDiv);

// myDiv.style = {
//   width: "100px",
//   height: "100px",
//   backgroundColor: "#ff0000",
// };

myDiv.style.width = "100px"
myDiv.style.height = "100px"
myDiv.style.backgroundColor = "#ff0000"
myDiv.textContent = "afsadfgsdfgsdf"

const userWidth = prompt("Введите ширину")


myDiv.style.width = userWidth + "px"

const answer1 = "1"
const answer2 = "2"
const answer3 = "3"

const userAsk = "adfsd"
const randomNum = Math.random()
if (randomNum < 0.33) alert(answer1)
else if (randomNum < 0.66) alert(answer1)
else alert(answer1)

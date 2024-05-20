const myDiv = document.getElementById("root");
console.log(myDiv);
console.dir(myDiv);

myDiv.style.width = "100px";
myDiv.style.height = "100px";
myDiv.style.borderColor = "#ff0000";
myDiv.style.borderWidth = "5px";

const userHeight = prompt("Введите высоту");
const userWidth = prompt("Введите ширину");
const userBorderWidth = prompt("Введите толщину рамки");
const userBorderColor = prompt("Введите цвет рамки");

myDiv.style.width = userWidth + "px";
myDiv.style.height = userHeight + "px";
myDiv.style.borderWidth = userBorderWidth + "px";
myDiv.style.borderColor = userBorderColor;
myDiv.style.borderStyle = "solid";

//const userNumber = promt("Введите свой возраст");
//if (InfinityNumber > NaN) {
//alert(userNumber);
//} else {
//  alert("Возраст не распознан");
//}
const userNumber = prompt("Введите свой возраст");
if (userNumber >= 130) {
  alert("Возраст не распознан");
} else if (userNumber <= 5) {
  alert("Слишком мал для пользования ПК");
} else if (userNumber < 16) {
  alert("Слишком юн для этого сайта");
} else if (userNumber > 60) {
  alert("Почтительно");
} else if (!!userNumber) {
  alert("Введен некорректно");
}

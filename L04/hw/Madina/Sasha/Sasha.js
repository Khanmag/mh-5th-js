const game = {
  nick: "CUBE",
  points: 0,
  startGame() {
    const userValue = confirm("Бросаем кубик?");
    const yesOrNo = Math.random();
    if (yesOrNo < 0.166) {
      alert("Делайте один шаг вперед");
    } else if (yesOrNo < 0.332 && yesOrNo > 0.166) {
      alert("Делайте два шага вперед");
    } else if (yesOrNo < 0.498 && yesOrNo > 0.332) {
      alert("Делайте три шага вперед");
    } else if (yesOrNo < 0.664 && yesOrNo > 0.498) {
      alert("Делайте четыре шага вперед");
    } else if (yesOrNo < 0.83 && yesOrNo > 0.664) {
      alert("Делайте пять шагов вперед");
    } else {
      alert("Делайте шесть шагов вперед");
    }

    startGame();
  },
};
game.startGame();
//if (yesOrNo>0) {
// alert("Делайте один шаг вперед");

//   if ((yesOrNo = Math.random() > 0.166)) {
//     alert("Делайте два шага вперед");
//   }
// }
// Math.random() > 0.166 ||
//   Math.random() > 0.332 ||
//   Math.random() > 0.498 ||
//   Math.random() > 0.664 ||
//   Math.random() > 0.83;

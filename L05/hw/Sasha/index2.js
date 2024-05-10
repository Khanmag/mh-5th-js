const answer = {
  nick: "Ball",
  points: 0,
  startGame() {
    const userValue = prompt("Задайте вопрос:");
    const yesOrNo = Math.random();
    if (yesOrNo < 0.166) {
      alert("Конечно");
    } else if (yesOrNo < 0.332 && yesOrNo > 0.166) {
      alert("Не сомневайся");
    } else if (yesOrNo < 0.498 && yesOrNo > 0.332) {
      alert("Не стоит");
    } else if (yesOrNo < 0.664 && yesOrNo > 0.498) {
      alert("50/50");
    } else if (yesOrNo < 0.83 && yesOrNo > 0.664) {
      alert("Подумай");
    } else {
      alert("Ммм");
    }

    startGame();
  },
};
answer.startGame();

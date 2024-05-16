let error = 0;
function correctAnswer() {
  const answerIn = document.getElementById("answerIn");
  const answerBut = document.getElementById("answerBut");
  const sendMess = document.getElementById("sendMess");
  answerBut.addEventListener("click", () => {
    const userAnswer = +prompt("Извлеките число из под корня 121го");
    try {
      if (userAnswer === 11) {
        sendMess.textContent = "Верно!";
      } else {
        error++;
        throw new Error();
      }
    } catch (error) {
      sendMess.textContent = "Неверно.";
      console.error(`Вы попытались ${error} раз`);
    }
  });
  document.body.appendChild(document.createElement("br"));
  document.body, appendChild(answerIn);
  document.body, appendChild(answerBut);
  document.body, appendChild(sendMess);
}
correctAnswer();

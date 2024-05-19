const correctAnswer = "orange";

function checkAnswer() {
  const answerInput = document.getElementById("answer");
  const message = document.getElementById("message");

  try {
    if (answerInput === correctAnswer) {
      message.textContent = "good";
    } else {
        message.textContent = "bad";
    }
  } catch (error) {}
}

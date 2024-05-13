function getAnswer() {
    const answers = [
      "Да",
      "Нет",
      "Возможно",
      "Вполне вероятно",
      "Сомнительно",
      "Спросите позже",
      "Может быть",
    ];

    const question = document.getElementById("questionInput").value;
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    document.getElementById("answer").innerText = randomAnswer;
  }
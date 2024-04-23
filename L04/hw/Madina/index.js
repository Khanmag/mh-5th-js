

function orderSteak() {
    const steakDegree = prompt("Выберите степень прожарки стейка 1. rare, 2. medium или 3. well done");

    if (steakDegree == 1 || steakDegree == 2 || steakDegree == 3) {
        const saltConfirmation = confirm("Хотите посолить стейк?");
        if (saltConfirmation) {
            const saltAmount = prompt("Сколько щепоток соли добавить?");
            alert(`Приятного аппетита! Соли: ${saltAmount} щепоток`);
        } else {
            alert("Приятного аппетита! Наслаждайтесь стейком без соли.");
        }
    } else {
        alert("Пожалуйста, выберите один из вариантов: rare, medium или well done.");
    }
}
orderSteak();
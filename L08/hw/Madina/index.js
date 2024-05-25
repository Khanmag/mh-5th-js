// ## 1) Создайте функцию-оптимизатор для результата выполнения ф-ии createColumn, созданной на занятии. Функция-оптимизатор должна принимать в себя колонки и выводить римское число в обычном виде

// ```
// const doNiceRomeNumber = (number) => {...}
// doNiceRomeNumber('IIIIIIII') ==>> 'VIII'
// doNiceRomeNumber('IIIIIIIII') ==>> 'IX'
// doNiceRomeNumber('IIIIIIIIIII') ==>> 'XI'
// ```

const column = [" ", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]

const creatColumns = (str) => {
    const length = str.length;
    if (length >= column.length) {
        return "в массиве нет более значений";
    }
    return column[length];
};

console.log(creatColumns('IIIIIIII')); 
console.log(creatColumns('IIIIIIIII'));
console.log(creatColumns('IIIIIIIIIII'));

// ## 2) Создайте функцию, которая при каждом вызове возвращает массив, 
// в котором записано время каждого её вызова. Проверьте её с помощью setTimeout или setInterval

const getTimeArray = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return [hours, minutes, seconds];
  };
  
  const timerId = setInterval(() => {
    const timeArray = getTimeArray();
    console.log(timeArray);
  }, 1000);

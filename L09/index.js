const array = [1, 2, 3, 4];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
// console.log(element);

// let isLoading = false
// try {
//   isLoading = true
//   console.log(array.data.count);
//   // -----------------
//   // isLoading = false
// } catch (error) {
//   // catch принимает в себя ОБЪЕКТ ошибки
//   console.log("Произошла ошибочка");
//   // console.log(error)
//   console.dir(error)
//   console.warn(error.message)
//   console.error(error.stack)
//   // isLoading = false
// } finally {
//   console.log("always here");
//   isLoading = false
// }

// try {
//   const userNumber = +prompt("Ведите число, которое следует возвести в квадрат", "5")
//   if (isNaN(userNumber)) {
//     // throw "Ошибочка"
//     throw new Error("Ошибочка")
//   }
//   else console.log(userNumber ** 2);
// } catch (error) {
//   console.dir(error)
// }

const currentData = []
// CRUD - create, read, update, delete / POST, GET, PUT | PATCH, DELETE
fetch("https://jsonplaceholder.typicode.com/todos")
  .then( response => {  
    console.log("RESPONSE", response);
    return response.json()
    // return 329
  })
  .then( data => {
    console.log("DATA", data);
    renderTodo(data)
    // currentData = data - не написано так, чтобы копировать не ссылку на массив, а его элементы
    // currentData = [...data]
    for(item of data) {
      currentData.push(item)
    }
  })
  // then принимает в себя 2 функции, для удачного и неудачного сценария

console.log(currentData);

const renderTodo = (todoArr) => {
  const div = document.getElementById("root")
  const newList = document.createElement("ul")
  for(item of todoArr) {
    const newListItem = document.createElement("li")
    newListItem.textContent = item.title
    newList.append(newListItem) // добавляет один элемент в другой
  }
  div.append(newList)
}




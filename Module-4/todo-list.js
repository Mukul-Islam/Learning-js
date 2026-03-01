const connect = () => fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => displayData(data));

const displayData = (todo) => {
    const containerList = document.getElementById("todo-container");

    //     "userId": 1,
    // "id": 1,
    // "title": "delectus aut autem",
    // "completed": false
    todo.forEach(element => {
        
         const divList = document.createElement("div");
         divList.innerHTML = `
         
         <div class="todo-style">
         <p>${
            element.completed == true
            ? `<i class="fa-regular fa-circle-check"></i>`
            :`</i> <i class="fa-solid fa-circle-check"></i>`
        } </p>
         <h4>${element.title}</h4>
     </div>
         `
         containerList.append(divList);
    });
}
connect()
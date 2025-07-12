let todoInput = document.getElementById("whistlist-adder")
let todoBtn = document.getElementById("btn-submit")
let showTodo = document.querySelector(".show-todo")
let delBtn = document.querySelector(".del-btn")
let todo;

// let localData = JSON.parse(localStorage.getItem("todo"));
let todoList = [];


//program to remove comma
function removeCommasFromDocument() {
    showTodo.innerHTML = showTodo.innerHTML.replace(/,/g, '');
    // document.body.innerHTML = document.body.innerHTML.replace(/,/g, '');
}
removeCommasFromDocument()

// //program to create unique adress
function todoId() {
    return 'item-xxx3x-sadhik-yxxx4-xxxx-xxxx'.replace(/[xy]/g, function (param) {
        let number = Math.random() * 15 | 0;
        let randomNumber = param == 'x' ? number : (number & 0x3 | 0x8);
        return randomNumber.toString()
    })
}

todoBtn.addEventListener("click", (e) => {
    e.preventDefault()
    todo = todoInput.value;
    if (todo != "") {
        if (todoList.length >= 0) {
            todoList.push({ id: todoId(), todo, isCompleted: false })
        }
        showTodoElement(todoList);
        // localStorage.setItem("todo", JSON.stringify(todoList))
        todoInput.value = ""
    } else {

        alert("Enter a Valid TODO")
    }

})

showTodo.addEventListener("click", (val) => {
    let key = val.target.dataset.key;
    let tododel = val.target.dataset.tododel;
    todoList = todoList.map(items => items.id === key ? { ...items, isCompleted: !items.isCompleted } : items)
    todoList = todoList.filter(items => items.id !== tododel);
    // localStorage.setItem("todo", JSON.stringify(todoList))
    showTodoElement(todoList)


})
let showTodoElement = (todoList) => {
    console.log(todoList);
    showTodo.innerHTML = todoList.map(({ id, todo, isCompleted }) =>
        `<div style="position:relative">
    <input id="${id}" class = "t-checkbox pointer-class" data-key=${id} type = "checkbox" ${isCompleted ? "checked" : ""} >
    <label for="${id}" class="todo pointer-class-label ${isCompleted ? "strike-label" : ""}" data-key=${id}> ${todo} </label> 
    <button  style = "border:none" class="absolute">
    <svg class="pointer" data-tododel = ${id} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z"/></svg> </button> 
    </div>
    <br>`
    )
    removeCommasFromDocument()

}



